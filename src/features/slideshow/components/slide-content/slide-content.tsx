import clsx from "clsx";
import { Gift, Heart } from "lucide-react";
import type { Slide } from "@/data";
import { copy } from "@/i18n/copy";
import { styles } from "./slide-content.styles";

/** Props for rendering one typed slide variant. */
export interface SlideContentProps {
  /** Slide content to render. */
  slide: Slide;
}

export const SlideContent = ({ slide }: SlideContentProps) => {
  if (slide.type === "single-photo") {
    const isCaptionTop = slide.captionPlacement === "top";

    return (
      <>
        <img className={styles.photoImage} src={slide.image.src} alt={slide.image.alt} />
        <div className={styles.photoShade} />
        <div className={clsx(styles.photoCaption, isCaptionTop && styles.photoCaptionTop)}>
          <h2 className={styles.slideTitle} id={`slide-title-${slide.id}`}>
            {slide.title}
          </h2>
          <p className={styles.slideText}>{slide.caption}</p>
        </div>
      </>
    );
  }

  if (slide.type === "photo-collage") {
    const isCaptionTop = slide.captionPlacement === "top";

    return (
      <div className={styles.collageLayout}>
        <div className={styles.collageGrid}>
          {slide.images.map((image) => (
            <div className={styles.collageItem} key={image.src}>
              <img className={styles.collageImage} src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div className={clsx(styles.collageCaption, isCaptionTop && styles.collageCaptionTop)}>
          <h2 className={styles.slideTitle} id={`slide-title-${slide.id}`}>
            {slide.title}
          </h2>
          <p className={styles.slideText}>{slide.caption}</p>
        </div>
      </div>
    );
  }

  if (slide.type === "final") {
    return (
      <div className={styles.passportPage}>
        <div className={styles.passportStamp}>
          <Heart aria-hidden="true" size={15} />
          {copy.slideshow.finalStamp}
        </div>
        <h2 className={styles.slideTitle} id={`slide-title-${slide.id}`}>
          {slide.title}
        </h2>
        <p className={styles.messageBody}>{slide.body}</p>
      </div>
    );
  }

  return (
    <div className={styles.passportPage}>
      <div className={styles.passportStamp}>
        <Gift aria-hidden="true" size={15} />
        {copy.slideshow.messageStamp}
      </div>
      <h2 className={styles.slideTitle} id={`slide-title-${slide.id}`}>
        {slide.title}
      </h2>
      <p className={styles.messageBody}>{slide.body}</p>
    </div>
  );
};
