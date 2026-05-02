import { Map, Volume2, VolumeX } from "lucide-react";
import { copy } from "@/i18n/copy";
import { styles } from "./progress-header.styles";

/** Props for the slideshow progress header. */
export interface ProgressHeaderProps {
  /** Title of the soundtrack active on the current slide. */
  activeSoundtrackTitle: string | undefined;
  /** Whether soundtrack controls should be shown during the journey. */
  canControlMusic: boolean;
  /** One-based position of the current slide. */
  currentPosition: number;
  /** Whether the soundtrack is currently intended to be playing. */
  isMusicPlaying: boolean;
  /** Total number of slides in the journey. */
  totalSlides: number;
  /** Completion percentage for the visual progress bar. */
  progressPercent: number;
  /** Toggles soundtrack playback after the journey has started. */
  onToggleMusic: () => void;
}

export const ProgressHeader = ({
  activeSoundtrackTitle,
  canControlMusic,
  currentPosition,
  isMusicPlaying,
  totalSlides,
  progressPercent,
  onToggleMusic,
}: ProgressHeaderProps) => {
  const soundtrackTitle = activeSoundtrackTitle ?? copy.slideshow.soundtrackFallback;
  const musicToggleLabel = isMusicPlaying
    ? copy.slideshow.muteMusicLabel(soundtrackTitle)
    : copy.slideshow.resumeMusicLabel(soundtrackTitle);

  return (
    <header className={styles.progressArea}>
      <div className={styles.progressMeta}>
        <span className={styles.progressLabel}>
          <Map aria-hidden="true" size={14} />
          {copy.slideshow.progressLabel}
        </span>
        <span className={styles.progressActions}>
          <span aria-live="polite">{copy.slideshow.slideStatus(currentPosition, totalSlides)}</span>
          {canControlMusic ? (
            <button
              aria-label={musicToggleLabel}
              className={styles.musicButton}
              title={musicToggleLabel}
              type="button"
              onClick={onToggleMusic}
            >
              {isMusicPlaying ? (
                <Volume2 aria-hidden="true" size={14} />
              ) : (
                <VolumeX aria-hidden="true" size={14} />
              )}
              {isMusicPlaying ? copy.slideshow.muteMusicButton : copy.slideshow.resumeMusicButton}
            </button>
          ) : null}
        </span>
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
};
