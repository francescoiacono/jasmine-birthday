import { useCallback, useEffect, useRef, useState } from "react";
import { slides, type Slide, type SlideSoundtrack } from "@/data";
import { clampSlideIndex, getActiveSlideSoundtrack, preloadSlideImages } from "../utils";

const soundtrackVolume = 0.72;
const soundtrackFadeInDurationMs = 900;
const soundtrackFadeOutDurationMs = 650;

/** Keeps an audio volume value inside the browser-supported range. */
const clampAudioVolume = (volume: number) => Math.min(Math.max(volume, 0), 1);

/** State and actions used to render and control the slideshow. */
export interface UseSlideshowResult {
  /** Whether the viewer has left the intro screen. */
  hasStarted: boolean;
  /** Viewer-selected music preference from the intro screen. */
  musicEnabled: boolean | null;
  /** Whether the soundtrack is currently intended to be playing. */
  isMusicPlaying: boolean;
  /** Whether soundtrack controls should be shown during the journey. */
  canControlMusic: boolean;
  /** Soundtrack selected for the current slide, if one is cued. */
  activeSoundtrack: SlideSoundtrack | undefined;
  /** Slide currently shown in the journey. */
  slide: Slide;
  /** One-based position of the current slide. */
  currentPosition: number;
  /** Total number of slides in the journey. */
  totalSlides: number;
  /** Completion percentage for the visual progress bar. */
  progressPercent: number;
  /** Direction used by slide transition animations. */
  direction: number;
  /** Whether the current slide is the closing slide. */
  isFinalSlide: boolean;
  /** Whether backward navigation is currently available. */
  canGoBack: boolean;
  /** Stores the viewer's music preference. */
  chooseMusic: (shouldPlay: boolean) => void;
  /** Starts the journey after the music preference is chosen. */
  startTrip: () => void;
  /** Advances to the next slide when available. */
  goNext: () => void;
  /** Moves to the previous slide when available. */
  goPrevious: () => void;
  /** Returns the journey to the first slide. */
  replayTrip: () => void;
  /** Toggles soundtrack playback after the journey has started. */
  toggleMusicPlayback: () => void;
}

/** Manages slideshow state, derived values, navigation, and image preloading. */
export const useSlideshow = (): UseSlideshowResult => {
  const [hasStarted, setHasStarted] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState<boolean | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const audioFadeCompleteRef = useRef<((didComplete: boolean) => void) | null>(null);
  const audioFadeFrameRef = useRef<number | null>(null);
  const audioFadeRunRef = useRef(0);
  const audioOperationIdRef = useRef(0);
  const activeSoundtrackIdRef = useRef<string | null>(null);

  const slide = slides[currentIndex];
  const activeSoundtrack = getActiveSlideSoundtrack(slides, currentIndex);
  const currentPosition = currentIndex + 1;
  const totalSlides = slides.length;
  const progressPercent = (currentPosition / totalSlides) * 100;
  const isFinalSlide = slide.type === "final";
  const canGoBack = currentIndex > 0;
  const canControlMusic = hasStarted && activeSoundtrack !== undefined;

  /** Starts a new audio operation so stale async playback work can be ignored. */
  const beginAudioOperation = useCallback(() => {
    audioOperationIdRef.current += 1;
    return audioOperationIdRef.current;
  }, []);

  /** Returns whether an async audio operation still owns the player. */
  const isCurrentAudioOperation = useCallback(
    (operationId: number) => audioOperationIdRef.current === operationId,
    [],
  );

  /** Cancels the active volume fade and resolves its pending work as cancelled. */
  const cancelAudioFade = useCallback(() => {
    if (audioFadeFrameRef.current !== null) {
      cancelAnimationFrame(audioFadeFrameRef.current);
      audioFadeFrameRef.current = null;
    }

    const completeAudioFade = audioFadeCompleteRef.current;
    audioFadeCompleteRef.current = null;
    audioFadeRunRef.current += 1;
    completeAudioFade?.(false);
  }, []);

  /** Fades the audio element to a target volume and reports whether it completed. */
  const fadeAudioVolume = useCallback(
    (audioElement: HTMLAudioElement, targetVolume: number, durationMs: number) => {
      cancelAudioFade();

      const fadeRun = audioFadeRunRef.current;
      const startVolume = clampAudioVolume(audioElement.volume);
      const safeTargetVolume = clampAudioVolume(targetVolume);
      audioElement.volume = startVolume;

      if (durationMs <= 0 || Math.abs(startVolume - safeTargetVolume) < 0.01) {
        audioElement.volume = safeTargetVolume;
        return Promise.resolve(true);
      }

      return new Promise<boolean>((resolve) => {
        const startTime = performance.now();

        /** Advances the current audio fade by one animation frame. */
        const stepFade = (timestamp: number) => {
          if (audioFadeRunRef.current !== fadeRun) {
            audioFadeFrameRef.current = null;
            audioFadeCompleteRef.current = null;
            resolve(false);
            return;
          }

          const progress = Math.min((timestamp - startTime) / durationMs, 1);
          const easedProgress = progress * progress * (3 - 2 * progress);
          audioElement.volume = clampAudioVolume(
            startVolume + (safeTargetVolume - startVolume) * easedProgress,
          );

          if (progress < 1) {
            audioFadeFrameRef.current = requestAnimationFrame(stepFade);
            return;
          }

          audioFadeFrameRef.current = null;
          audioFadeCompleteRef.current = null;
          audioElement.volume = safeTargetVolume;
          resolve(true);
        };

        audioFadeCompleteRef.current = resolve;
        audioFadeFrameRef.current = requestAnimationFrame(stepFade);
      });
    },
    [cancelAudioFade],
  );

  /** Creates the audio element lazily after a viewer gesture has enabled playback. */
  const getAudioElement = useCallback(() => {
    if (audioElementRef.current !== null) {
      return audioElementRef.current;
    }

    const audioElement = new Audio();
    audioElement.loop = true;
    audioElement.preload = "auto";
    audioElement.volume = 0;
    audioElementRef.current = audioElement;

    return audioElement;
  }, []);

  /** Starts or switches the soundtrack to the requested track with a volume fade. */
  const playSoundtrack = useCallback(
    async (soundtrack: SlideSoundtrack) => {
      const operationId = beginAudioOperation();
      const audioElement = getAudioElement();
      const isNewSoundtrack = activeSoundtrackIdRef.current !== soundtrack.id;
      audioElement.loop = true;

      if (isNewSoundtrack) {
        if (!audioElement.paused && audioElement.volume > 0) {
          const didFadeOut = await fadeAudioVolume(audioElement, 0, soundtrackFadeOutDurationMs);

          if (!didFadeOut || !isCurrentAudioOperation(operationId)) {
            return;
          }
        }

        audioElement.pause();
        audioElement.src = soundtrack.src;
        audioElement.currentTime = 0;
        audioElement.volume = 0;
        activeSoundtrackIdRef.current = soundtrack.id;
      }

      if (audioElement.paused) {
        audioElement.volume = 0;
      }

      await audioElement.play();

      if (!isCurrentAudioOperation(operationId)) {
        return;
      }

      await fadeAudioVolume(audioElement, soundtrackVolume, soundtrackFadeInDurationMs);
    },
    [beginAudioOperation, fadeAudioVolume, getAudioElement, isCurrentAudioOperation],
  );

  /** Fades out and pauses the current soundtrack without clearing the selected track. */
  const pauseSoundtrack = useCallback(async () => {
    const operationId = beginAudioOperation();
    const audioElement = audioElementRef.current;

    if (audioElement === null) {
      cancelAudioFade();
      return;
    }

    if (!audioElement.paused && audioElement.volume > 0) {
      const didFadeOut = await fadeAudioVolume(audioElement, 0, soundtrackFadeOutDurationMs);

      if (!didFadeOut || !isCurrentAudioOperation(operationId)) {
        return;
      }
    }

    audioElement.pause();
    audioElement.volume = 0;
  }, [beginAudioOperation, cancelAudioFade, fadeAudioVolume, isCurrentAudioOperation]);

  /** Stops soundtrack playback immediately for teardown where a fade cannot finish. */
  const stopSoundtrackImmediately = useCallback(() => {
    beginAudioOperation();
    cancelAudioFade();

    if (audioElementRef.current !== null) {
      audioElementRef.current.pause();
      audioElementRef.current.volume = 0;
    }
  }, [beginAudioOperation, cancelAudioFade]);

  useEffect(() => {
    // Preload the visible slide plus the next two slides to keep navigation responsive.
    for (const nearbySlide of slides.slice(currentIndex, currentIndex + 3)) {
      preloadSlideImages(nearbySlide);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!canControlMusic || !isMusicPlaying || activeSoundtrack === undefined) {
      void pauseSoundtrack();
      return;
    }

    void playSoundtrack(activeSoundtrack).catch(() => setIsMusicPlaying(false));
  }, [activeSoundtrack, canControlMusic, isMusicPlaying, pauseSoundtrack, playSoundtrack]);

  useEffect(
    () => () => {
      stopSoundtrackImmediately();
      audioElementRef.current = null;
      activeSoundtrackIdRef.current = null;
    },
    [stopSoundtrackImmediately],
  );

  /** Moves to a requested slide index while preserving transition direction. */
  const moveToSlide = (requestedIndex: number) => {
    const nextIndex = clampSlideIndex(requestedIndex, totalSlides);

    if (nextIndex === currentIndex) {
      return;
    }

    setDirection(nextIndex > currentIndex ? 1 : -1);
    setCurrentIndex(nextIndex);
  };

  /** Advances to the next slide when one is available. */
  const goNext = () => moveToSlide(currentIndex + 1);

  /** Moves to the previous slide when one is available. */
  const goPrevious = () => moveToSlide(currentIndex - 1);

  /** Stores whether the viewer wants music for the trip. */
  const chooseMusic = (shouldPlay: boolean) => {
    setMusicEnabled(shouldPlay);

    if (!shouldPlay) {
      setIsMusicPlaying(false);
      void pauseSoundtrack();
    }
  };

  /** Starts the slideshow after the viewer has made a music choice. */
  const startTrip = () => {
    if (musicEnabled === null) {
      return;
    }

    if (musicEnabled && activeSoundtrack !== undefined) {
      setIsMusicPlaying(true);
      void playSoundtrack(activeSoundtrack).catch(() => setIsMusicPlaying(false));
    }

    setHasStarted(true);
  };

  /** Restarts the journey from the first slide. */
  const replayTrip = () => {
    setDirection(-1);
    setCurrentIndex(0);
  };

  /** Toggles soundtrack playback from the in-journey music control. */
  const toggleMusicPlayback = () => {
    if (!canControlMusic || activeSoundtrack === undefined) {
      return;
    }

    if (isMusicPlaying) {
      setIsMusicPlaying(false);
      void pauseSoundtrack();
      return;
    }

    setIsMusicPlaying(true);
    void playSoundtrack(activeSoundtrack).catch(() => setIsMusicPlaying(false));
  };

  return {
    hasStarted,
    musicEnabled,
    isMusicPlaying,
    canControlMusic,
    activeSoundtrack,
    slide,
    currentPosition,
    totalSlides,
    progressPercent,
    direction,
    isFinalSlide,
    canGoBack,
    chooseMusic,
    startTrip,
    goNext,
    goPrevious,
    replayTrip,
    toggleMusicPlayback,
  };
};
