import clsx from "clsx";
import { Gift, Map, Music, VolumeX } from "lucide-react";
import { copy } from "@/i18n/copy";
import { styles } from "./intro-screen.styles";

/** Props for the intro screen shown before the journey starts. */
export interface IntroScreenProps {
  /** Viewer-selected music preference from the intro screen. */
  musicEnabled: boolean | null;
  /** Stores the viewer's music preference. */
  onChooseMusic: (shouldPlay: boolean) => void;
  /** Starts the journey after the music preference is chosen. */
  onStart: () => void;
}

export const IntroScreen = ({ musicEnabled, onChooseMusic, onStart }: IntroScreenProps) => (
  <section className={styles.introScreen} aria-labelledby="intro-title">
    <div className={styles.introContent}>
      <div className={styles.introMark}>
        <Map aria-hidden="true" size={16} />
        {copy.slideshow.introStamp}
      </div>

      <div>
        <h1 className={styles.introTitle} id="intro-title">
          {copy.slideshow.introTitle}
        </h1>
        <p className={styles.introBody}>{copy.slideshow.introBody}</p>
      </div>

      <div className={styles.choicePanel}>
        <p className={styles.musicPrompt}>{copy.slideshow.musicPrompt}</p>
        <div className={styles.choiceGrid}>
          <button
            aria-pressed={musicEnabled === true}
            className={clsx(
              styles.choiceButton,
              musicEnabled === true && styles.choiceButtonSelected,
            )}
            type="button"
            onClick={() => onChooseMusic(true)}
          >
            <Music aria-hidden="true" size={18} />
            {copy.slideshow.musicYes}
          </button>
          <button
            aria-pressed={musicEnabled === false}
            className={clsx(
              styles.choiceButton,
              musicEnabled === false && styles.choiceButtonSelected,
            )}
            type="button"
            onClick={() => onChooseMusic(false)}
          >
            <VolumeX aria-hidden="true" size={18} />
            {copy.slideshow.musicNo}
          </button>
        </div>
        <button
          className={styles.primaryButton}
          disabled={musicEnabled === null}
          type="button"
          onClick={onStart}
        >
          <Gift aria-hidden="true" size={19} />
          {copy.slideshow.startButton}
        </button>
      </div>
    </div>
  </section>
);
