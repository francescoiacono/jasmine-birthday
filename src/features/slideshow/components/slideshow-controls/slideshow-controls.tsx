import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { copy } from "@/i18n/copy";
import { Button } from "../button";
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
    <Button
      aria-label={copy.slideshow.previousButton}
      className={styles.previousButton}
      disabled={!canGoBack}
      leftIcon={<ArrowLeft aria-hidden="true" size={26} />}
      size="iconMd"
      title={copy.slideshow.previousButton}
      tone="ink"
      onClick={onPrevious}
    />

    {isFinalSlide ? (
      <div className={styles.replayArea}>
        <Button
          fullWidth
          leftIcon={<RotateCcw aria-hidden="true" size={18} />}
          size="md"
          variant="primary"
          onClick={onReplay}
        >
          {copy.slideshow.replayButton}
        </Button>
      </div>
    ) : (
      <Button
        aria-label={copy.slideshow.nextButton}
        className={styles.nextButton}
        leftIcon={<ArrowRight aria-hidden="true" size={30} />}
        size="iconLg"
        title={copy.slideshow.nextButton}
        variant="primary"
        onClick={onNext}
      />
    )}
  </footer>
);
