import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { copy } from "@/i18n/copy";
import { styles } from "./slideshow-controls.styles";

/** Props for previous, next, and replay controls. */
export interface SlideshowControlsProps {
  /** Whether backward navigation is currently available. */
  canGoBack: boolean;
  /** Whether the current slide is the closing slide. */
  isFinalSlide: boolean;
  /** Moves to the previous slide when requested. */
  onPrevious: () => void;
  /** Advances to the next slide when requested. */
  onNext: () => void;
  /** Returns the journey to the first slide. */
  onReplay: () => void;
}

export const SlideshowControls = ({
  canGoBack,
  isFinalSlide,
  onPrevious,
  onNext,
  onReplay,
}: SlideshowControlsProps) => (
  <footer className={styles.controls}>
    <button
      aria-label={copy.slideshow.previousButton}
      className={styles.navButton}
      disabled={!canGoBack}
      title={copy.slideshow.previousButton}
      type="button"
      onClick={onPrevious}
    >
      <ArrowLeft aria-hidden="true" size={26} />
    </button>

    {isFinalSlide ? (
      <div className={styles.replayArea}>
        <button className={styles.replayButton} type="button" onClick={onReplay}>
          <RotateCcw aria-hidden="true" size={18} />
          {copy.slideshow.replayButton}
        </button>
      </div>
    ) : (
      <>
        <button
          aria-label={copy.slideshow.nextButton}
          className={styles.nextButton}
          title={copy.slideshow.nextButton}
          type="button"
          onClick={onNext}
        >
          <ArrowRight aria-hidden="true" size={30} />
        </button>
      </>
    )}
  </footer>
);
