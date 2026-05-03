import { Music, Plane } from "lucide-react";
import { copy } from "@/i18n/copy";
import { Button } from "../button";
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
            <Button
              aria-pressed={musicEnabled === true}
              leftIcon={<Music aria-hidden="true" size={24} />}
              selected={musicEnabled === true}
              onClick={() => onChooseMusic(true)}
            >
              {copy.slideshow.musicYes}
            </Button>
            <Button
              aria-pressed={musicEnabled === false}
              selected={musicEnabled === false}
              onClick={() => onChooseMusic(false)}
            >
              {copy.slideshow.musicNo}
            </Button>
          </div>
        </div>
        <Button
          fullWidth
          disabled={musicEnabled === null}
          rightIcon={<Plane aria-hidden="true" size={19} />}
          size="lg"
          variant="primary"
          onClick={onStart}
        >
          {copy.slideshow.startButton}
        </Button>
      </div>
    </div>
  </section>
);
