import type { Slide } from "@/data";

/** Keeps a requested slide index inside the available slide range. */
export const clampSlideIndex = (index: number, slideCount: number) =>
  Math.min(Math.max(index, 0), Math.max(slideCount - 1, 0));

/** Returns every image source used by a slide so it can be preloaded. */
export const getSlideImageSources = (slide: Slide): readonly string[] => {
  if (slide.type === "single-photo") {
    return [slide.image.src];
  }

  if (slide.type === "photo-collage") {
    return slide.images.map((image) => image.src);
  }

  return [];
};

/** Returns the latest soundtrack cue at or before the requested slide. */
export const getActiveSlideSoundtrack = (allSlides: readonly Slide[], currentIndex: number) => {
  const safeIndex = clampSlideIndex(currentIndex, allSlides.length);

  for (let index = safeIndex; index >= 0; index -= 1) {
    const slideSoundtrack = allSlides[index]?.soundtrack;

    if (slideSoundtrack !== undefined) {
      return slideSoundtrack;
    }
  }

  return undefined;
};

/** Preloads the images for a slide without adding them to visible markup. */
export const preloadSlideImages = (slide: Slide) => {
  for (const source of getSlideImageSources(slide)) {
    const image = new Image();
    image.decoding = "async";
    image.src = source;
  }
};
