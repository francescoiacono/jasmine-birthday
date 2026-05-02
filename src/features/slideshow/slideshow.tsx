import { copy } from "@/i18n/copy";
import { IntroScreen } from "./components/intro-screen";
import { ProgressHeader } from "./components/progress-header";
import { SlideStage } from "./components/slide-stage";
import { SlideshowControls } from "./components/slideshow-controls";
import { useSlideshow } from "./hooks/use-slideshow";
import { styles } from "./slideshow.styles";

export const Slideshow = () => {
  const slideshow = useSlideshow();

  if (!slideshow.hasStarted) {
    return (
      <main className={styles.shell}>
        <IntroScreen
          musicEnabled={slideshow.musicEnabled}
          onChooseMusic={slideshow.chooseMusic}
          onStart={slideshow.startTrip}
        />
      </main>
    );
  }

  return (
    <main className={styles.shell}>
      <section
        aria-label={copy.slideshow.journeyLabel}
        className={styles.tripScreen}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            slideshow.goPrevious();
          }

          if (event.key === "ArrowRight") {
            slideshow.goNext();
          }
        }}
      >
        <ProgressHeader
          currentPosition={slideshow.currentPosition}
          progressPercent={slideshow.progressPercent}
          totalSlides={slideshow.totalSlides}
        />
        <SlideStage
          direction={slideshow.direction}
          slide={slideshow.slide}
          onNext={slideshow.goNext}
          onPrevious={slideshow.goPrevious}
        />
        <SlideshowControls
          canGoBack={slideshow.canGoBack}
          isFinalSlide={slideshow.isFinalSlide}
          onNext={slideshow.goNext}
          onPrevious={slideshow.goPrevious}
          onReplay={slideshow.replayTrip}
        />
      </section>
    </main>
  );
};
