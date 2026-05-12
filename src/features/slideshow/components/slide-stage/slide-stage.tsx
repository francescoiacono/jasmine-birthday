import { useRef, type MouseEvent, type PointerEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Slide } from "@/data";
import { SlideContent } from "../slide-content";
import { styles } from "./slide-stage.styles";

const swipeThreshold = 44;

/** Returns the visible text only when a slide field contains non-whitespace content. */
const getVisibleText = (value: string | undefined) => {
  const trimmedValue = value?.trim();

  return trimmedValue ? value : undefined;
};

/** Builds a fallback accessible label for slides that do not render a title heading. */
const getSlideAriaLabel = (slide: Slide) => {
  const title = getVisibleText(slide.title);

  if (title) {
    return undefined;
  }

  if (slide.type === "single-photo") {
    return getVisibleText(slide.caption) ?? getVisibleText(slide.image.alt);
  }

  if (slide.type === "photo-collage") {
    return (
      getVisibleText(slide.caption) ??
      slide.images.map((image) => getVisibleText(image.alt)).find(Boolean)
    );
  }

  if (slide.type === "video") {
    return getVisibleText(slide.caption) ?? getVisibleText(slide.video.label);
  }

  return getVisibleText(slide.body);
};

/** Props for the animated slide stage and gesture handling. */
export interface SlideStageProps {
  /** Slide currently shown in the stage. */
  slide: Slide;
  /** Direction used by slide transition animations. */
  direction: number;
  /** Advances to the next slide when requested. */
  onNext: () => void;
  /** Moves to the previous slide when requested. */
  onPrevious: () => void;
}

export const SlideStage = ({ slide, direction, onNext, onPrevious }: SlideStageProps) => {
  const shouldReduceMotion = useReducedMotion();
  const pointerStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const hasTitle = Boolean(getVisibleText(slide.title));
  const ariaLabel = getSlideAriaLabel(slide);

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    pointerStartX.current = event.clientX;
    didSwipe.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerStartX.current === null) {
      return;
    }

    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(deltaX) < swipeThreshold) {
      return;
    }

    didSwipe.current = true;

    if (deltaX < 0) {
      onNext();
      return;
    }

    onPrevious();
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
    didSwipe.current = false;
  };

  const handleStageClick = (event: MouseEvent<HTMLElement>) => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const clickOffset = event.clientX - bounds.left;

    if (clickOffset < bounds.width * 0.35) {
      onPrevious();
      return;
    }

    onNext();
  };

  return (
    <div
      className={styles.stage}
      onClick={handleStageClick}
      onPointerCancel={handlePointerCancel}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.article
          aria-label={ariaLabel}
          aria-labelledby={hasTitle ? `slide-title-${slide.id}` : undefined}
          className={styles.slideArticle}
          exit={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : direction > 0 ? -36 : 36,
          }}
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : direction > 0 ? 36 : -36,
          }}
          key={slide.id}
          transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SlideContent slide={slide} />
        </motion.article>
      </AnimatePresence>
    </div>
  );
};
