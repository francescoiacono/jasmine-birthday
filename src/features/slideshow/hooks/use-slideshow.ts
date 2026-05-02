import { useEffect, useState } from "react";
import { slides, type Slide } from "@/data";
import { clampSlideIndex, preloadSlideImages } from "../utils";

/** State and actions used to render and control the slideshow. */
export interface UseSlideshowResult {
  /** Whether the viewer has left the intro screen. */
  hasStarted: boolean;
  /** Viewer-selected music preference from the intro screen. */
  musicEnabled: boolean | null;
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
}

/** Manages slideshow state, derived values, navigation, and image preloading. */
export const useSlideshow = (): UseSlideshowResult => {
  const [hasStarted, setHasStarted] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState<boolean | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slide = slides[currentIndex];
  const currentPosition = currentIndex + 1;
  const totalSlides = slides.length;
  const progressPercent = (currentPosition / totalSlides) * 100;
  const isFinalSlide = slide.type === "final";
  const canGoBack = currentIndex > 0;

  useEffect(() => {
    // Preload the visible slide plus the next two slides to keep navigation responsive.
    for (const nearbySlide of slides.slice(currentIndex, currentIndex + 3)) {
      preloadSlideImages(nearbySlide);
    }
  }, [currentIndex]);

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
  const chooseMusic = (shouldPlay: boolean) => setMusicEnabled(shouldPlay);

  /** Starts the slideshow after the viewer has made a music choice. */
  const startTrip = () => {
    if (musicEnabled === null) {
      return;
    }

    setHasStarted(true);
  };

  /** Restarts the journey from the first slide. */
  const replayTrip = () => {
    setDirection(-1);
    setCurrentIndex(0);
  };

  return {
    hasStarted,
    musicEnabled,
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
  };
};
