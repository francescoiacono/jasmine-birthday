import { useCallback, useEffect, useRef, useState } from "react";
import { slides, type Slide, type SlideSoundtrack } from "@/data";
import { clampSlideIndex, getActiveSlideSoundtrack, preloadSlideImages } from "../utils";

const soundtrackVolume = 0.72;

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
  const activeSoundtrackIdRef = useRef<string | null>(null);

  const slide = slides[currentIndex];
  const activeSoundtrack = getActiveSlideSoundtrack(slides, currentIndex);
  const currentPosition = currentIndex + 1;
  const totalSlides = slides.length;
  const progressPercent = (currentPosition / totalSlides) * 100;
  const isFinalSlide = slide.type === "final";
  const canGoBack = currentIndex > 0;
  const canControlMusic = hasStarted && activeSoundtrack !== undefined;

  /** Creates the audio element lazily after a viewer gesture has enabled playback. */
  const getAudioElement = useCallback(() => {
    if (audioElementRef.current !== null) {
      return audioElementRef.current;
    }

    const audioElement = new Audio();
    audioElement.loop = true;
    audioElement.preload = "auto";
    audioElement.volume = soundtrackVolume;
    audioElementRef.current = audioElement;

    return audioElement;
  }, []);

  /** Starts or switches the soundtrack to the requested track. */
  const playSoundtrack = useCallback(
    (soundtrack: SlideSoundtrack) => {
      const audioElement = getAudioElement();
      audioElement.loop = true;
      audioElement.volume = soundtrackVolume;

      if (activeSoundtrackIdRef.current !== soundtrack.id) {
        audioElement.pause();
        audioElement.src = soundtrack.src;
        audioElement.currentTime = 0;
        activeSoundtrackIdRef.current = soundtrack.id;
      }

      return audioElement.play();
    },
    [getAudioElement],
  );

  /** Pauses the current soundtrack without clearing the selected track. */
  const pauseSoundtrack = useCallback(() => {
    audioElementRef.current?.pause();
  }, []);

  useEffect(() => {
    // Preload the visible slide plus the next two slides to keep navigation responsive.
    for (const nearbySlide of slides.slice(currentIndex, currentIndex + 3)) {
      preloadSlideImages(nearbySlide);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!canControlMusic || !isMusicPlaying || activeSoundtrack === undefined) {
      pauseSoundtrack();
      return;
    }

    void playSoundtrack(activeSoundtrack).catch(() => setIsMusicPlaying(false));
  }, [activeSoundtrack, canControlMusic, isMusicPlaying, pauseSoundtrack, playSoundtrack]);

  useEffect(
    () => () => {
      audioElementRef.current?.pause();
      audioElementRef.current = null;
      activeSoundtrackIdRef.current = null;
    },
    [],
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
      pauseSoundtrack();
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
      pauseSoundtrack();
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
