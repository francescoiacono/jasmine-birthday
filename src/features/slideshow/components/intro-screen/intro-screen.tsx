import clsx from "clsx";
import { Music, Plane } from "lucide-react";
import { copy } from "@/i18n/copy";
import { BirthdayPassport } from "../birthday-passport";
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
      <div>
        <h1 aria-label={copy.slideshow.introTitle} className={styles.introTitle} id="intro-title">
          {copy.slideshow.introTitleLines.map((line, index) => {
            const isLastLine = index === copy.slideshow.introTitleLines.length - 1;

            return (
              <span aria-hidden="true" className={styles.introTitleLine} key={line}>
                {line}
                {isLastLine ? (
                  <span className={styles.introTitleCake}>{copy.slideshow.introTitleCake}</span>
                ) : null}
              </span>
            );
          })}
        </h1>
        <p className={styles.introBody}>{copy.slideshow.introBody}</p>
      </div>

      <BirthdayPassport />

      <div className={styles.choicePanel}>
        <div className={styles.musicChoicePanel}>
          <p className={styles.musicPrompt}>
            <Music aria-hidden="true" size={22} />
            {copy.slideshow.musicPrompt}
          </p>
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
              <Music aria-hidden="true" size={24} />
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
              {copy.slideshow.musicNo}
            </button>
          </div>
        </div>
        <button
          className={styles.primaryButton}
          disabled={musicEnabled === null}
          type="button"
          onClick={onStart}
        >
          {copy.slideshow.startButton}
          <Plane aria-hidden="true" size={19} />
        </button>
      </div>
    </div>
  </section>
);
