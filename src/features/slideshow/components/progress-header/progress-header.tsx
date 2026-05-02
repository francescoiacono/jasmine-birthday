import { Map } from "lucide-react";
import { copy } from "@/i18n/copy";
import { styles } from "./progress-header.styles";

/** Props for the slideshow progress header. */
export interface ProgressHeaderProps {
  /** One-based position of the current slide. */
  currentPosition: number;
  /** Total number of slides in the journey. */
  totalSlides: number;
  /** Completion percentage for the visual progress bar. */
  progressPercent: number;
}

export const ProgressHeader = ({
  currentPosition,
  totalSlides,
  progressPercent,
}: ProgressHeaderProps) => (
  <header className={styles.progressArea}>
    <div className={styles.progressMeta}>
      <span className={styles.progressLabel}>
        <Map aria-hidden="true" size={14} />
        {copy.slideshow.progressLabel}
      </span>
      <span aria-live="polite">{copy.slideshow.slideStatus(currentPosition, totalSlides)}</span>
    </div>
    <div
      aria-label={copy.slideshow.progressLabel}
      aria-valuemax={totalSlides}
      aria-valuemin={1}
      aria-valuenow={currentPosition}
      aria-valuetext={copy.slideshow.slideStatus(currentPosition, totalSlides)}
      className={styles.progressTrack}
      role="progressbar"
    >
      <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
    </div>
  </header>
);
