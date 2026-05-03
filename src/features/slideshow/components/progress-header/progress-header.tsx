import { Map, Volume2, VolumeX } from "lucide-react";
import { copy } from "@/i18n/copy";
import { Button } from "../button";
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
        <span className={styles.progressStatus} aria-live="polite">
          <Map aria-hidden="true" size={14} />
          {copy.slideshow.slideStatus(currentPosition, totalSlides)}
        </span>
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
          <span
            aria-hidden="true"
            className={styles.progressPlaneBadge}
            style={{ left: `clamp(1rem, ${progressPercent}%, calc(100% - 1rem))` }}
          >
            <svg
              className={styles.progressPlane}
              fill="currentColor"
              focusable="false"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z" />
            </svg>
          </span>
        </div>
        {canControlMusic ? (
          <span className={styles.progressActions}>
            <Button
              aria-label={musicToggleLabel}
              leftIcon={
                isMusicPlaying ? (
                  <Volume2 aria-hidden="true" size={14} />
                ) : (
                  <VolumeX aria-hidden="true" size={14} />
                )
              }
              size="iconSm"
              title={musicToggleLabel}
              tone="ink"
              onClick={onToggleMusic}
            />
          </span>
        ) : null}
      </div>
    </header>
  );
};
