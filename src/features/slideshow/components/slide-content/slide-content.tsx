import { useEffect, useRef, type SyntheticEvent } from "react";
import clsx from "clsx";
import { Gift, Heart, Stamp } from "lucide-react";
import type { CaptionPlacement, Slide } from "@/data";
import { copy } from "@/i18n/copy";
import { styles } from "./slide-content.styles";

const defaultCaptionPlacement: CaptionPlacement = "bottom";

/** Returns the visible text only when a slide field contains non-whitespace content. */
const getVisibleText = (value: string | undefined) => {
  const trimmedValue = value?.trim();

  return trimmedValue ? value : undefined;
};

/** Returns the chosen caption placement, falling back to the bottom of the slide. */
const getCaptionPlacement = (captionPlacement: CaptionPlacement | undefined) =>
  captionPlacement ?? defaultCaptionPlacement;

/** Selects the most intentional mobile collage grid for the number of photos. */
const getCollageGridClassName = (imageCount: number) =>
  clsx(
    styles.collageGrid,
    imageCount === 2 && styles.collageGridTwo,
    imageCount === 3 && styles.collageGridThree,
    imageCount === 4 && styles.collageGridFour,
    imageCount === 5 && styles.collageGridFive,
    imageCount >= 6 && styles.collageGridMany,
  );

/** Returns true when the first collage image should be treated as the hero tile. */
const isFeaturedCollageImage = (imageCount: number, imageIndex: number) =>
  imageIndex === 0 && (imageCount === 3 || imageCount === 5);

/** Prevents video control interactions from also triggering stage navigation. */
const stopStageNavigation = (event: SyntheticEvent<HTMLElement>) => {
  event.stopPropagation();
};

/** Props for rendering one native video slide. */
interface VideoSlideContentProps {
  /** Video slide content to render. */
  slide: Extract<Slide, { type: "video" }>;
}

/** Props for rendering a postcard-style message slide. */
interface PostcardSlideContentProps {
  /** Message slide content to render as a postcard. */
  slide: Extract<Slide, { type: "message" }>;
}

/** Props for rendering a simpler stamped-note message. */
interface StampedNoteSlideContentProps {
  /** Message or final slide content to render as a stamped note. */
  slide: Extract<Slide, { type: "message" | "final" }>;
}

const VideoSlideContent = ({ slide }: VideoSlideContentProps) => {
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const isCaptionTop = getCaptionPlacement(slide.captionPlacement) === "top";
  const title = getVisibleText(slide.title);
  const caption = getVisibleText(slide.caption);
  const hasText = Boolean(title || caption);
  const shouldAutoPlay = slide.video.autoPlay ?? true;
  const shouldLoop = slide.video.loop ?? true;
  const shouldMute = slide.video.muted ?? false;

  useEffect(() => {
    const videoElement = videoElementRef.current;

    if (!shouldAutoPlay || videoElement === null) {
      return;
    }

    // Browsers may reject unmuted autoplay; controls remain available when they do.
    void videoElement.play().catch(() => undefined);
  }, [shouldAutoPlay, slide.video.src]);

  return (
    <div className={clsx(styles.videoLayout, isCaptionTop && styles.videoLayoutCaptionTop)}>
      <div
        className={styles.videoFrame}
        onClick={stopStageNavigation}
        onPointerCancel={stopStageNavigation}
        onPointerDown={stopStageNavigation}
        onPointerUp={stopStageNavigation}
      >
        <video
          aria-label={slide.video.label}
          autoPlay={shouldAutoPlay}
          className={styles.videoPlayer}
          controls
          loop={shouldLoop}
          muted={shouldMute}
          playsInline
          poster={slide.video.poster?.src}
          preload="metadata"
          ref={videoElementRef}
        >
          <source src={slide.video.src} />
          {slide.video.tracks?.map((track) => (
            <track
              default={track.default}
              key={`${track.src}-${track.srcLang}-${track.label}`}
              kind={track.kind ?? "captions"}
              label={track.label}
              src={track.src}
              srcLang={track.srcLang}
            />
          ))}
          {copy.slideshow.videoFallback}
        </video>
      </div>
      {hasText && (
        <div className={clsx(styles.videoCaption, isCaptionTop && styles.videoCaptionTop)}>
          {title && (
            <h2 className={styles.captionTitle} id={`slide-title-${slide.id}`}>
              {title}
            </h2>
          )}
          {caption && (
            <p className={clsx(styles.captionText, !title && styles.captionTextSolo)}>{caption}</p>
          )}
        </div>
      )}
    </div>
  );
};

const PostcardSlideContent = ({ slide }: PostcardSlideContentProps) => {
  const title = getVisibleText(slide.title);
  const body = getVisibleText(slide.body);

  return (
    <div className={styles.postcard}>
      <div className={styles.postageStamp} aria-hidden="true">
        <Stamp size={30} strokeWidth={1.6} />
      </div>

      <div className={styles.postcardContent}>
        <div className={styles.postcardMessage}>
          <div className={styles.postcardLabel}>
            <Gift aria-hidden="true" size={15} />
            {copy.slideshow.messageStamp}
          </div>
          {title && (
            <h2 className={styles.slideTitle} id={`slide-title-${slide.id}`}>
              {title}
            </h2>
          )}
          {body && <p className={styles.messageBody}>{body}</p>}
        </div>

        <div className={styles.postcardAddress} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

const StampedNoteSlideContent = ({ slide }: StampedNoteSlideContentProps) => {
  const isFinalSlide = slide.type === "final";
  const title = getVisibleText(slide.title);
  const body = getVisibleText(slide.body);
  const stampLabel = isFinalSlide ? copy.slideshow.finalStamp : copy.slideshow.chapterStamp;
  const NoteLabelIcon = isFinalSlide ? Heart : Stamp;

  return (
    <div className={clsx(styles.stampedNote, isFinalSlide && styles.stampedNoteFinal)}>
      <div className={styles.stampedNoteMark} aria-hidden="true">
        <span />
        <span />
      </div>
      <div className={styles.stampedNoteLabel}>
        <NoteLabelIcon aria-hidden="true" size={15} />
        {stampLabel}
      </div>
      {title && (
        <h2 className={styles.noteTitle} id={`slide-title-${slide.id}`}>
          {title}
        </h2>
      )}
      {body && <p className={styles.noteBody}>{body}</p>}
    </div>
  );
};

/** Props for rendering one typed slide variant. */
export interface SlideContentProps {
  /** Slide content to render. */
  slide: Slide;
}

export const SlideContent = ({ slide }: SlideContentProps) => {
  if (slide.type === "single-photo") {
    const isCaptionTop = getCaptionPlacement(slide.captionPlacement) === "top";
    const title = getVisibleText(slide.title);
    const caption = getVisibleText(slide.caption);
    const hasText = Boolean(title || caption);

    return (
      <div className={styles.photoFrame}>
        <img className={styles.photoImage} src={slide.image.src} alt={slide.image.alt} />
        {hasText && <div className={styles.photoShade} />}
        {hasText && (
          <div className={clsx(styles.photoCaption, isCaptionTop && styles.photoCaptionTop)}>
            {title && (
              <h2 className={styles.captionTitle} id={`slide-title-${slide.id}`}>
                {title}
              </h2>
            )}
            {caption && (
              <p className={clsx(styles.captionText, !title && styles.captionTextSolo)}>
                {caption}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  if (slide.type === "photo-collage") {
    const isCaptionTop = getCaptionPlacement(slide.captionPlacement) === "top";
    const title = getVisibleText(slide.title);
    const caption = getVisibleText(slide.caption);
    const hasText = Boolean(title || caption);
    const imageCount = slide.images.length;

    return (
      <div className={clsx(styles.collageLayout, isCaptionTop && styles.collageLayoutCaptionTop)}>
        <div className={getCollageGridClassName(imageCount)}>
          {slide.images.map((image, imageIndex) => (
            <div
              className={clsx(
                styles.collageItem,
                isFeaturedCollageImage(imageCount, imageIndex) && styles.collageItemFeatured,
              )}
              key={`${image.src}-${imageIndex}`}
            >
              <img className={styles.collageImage} src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
        {hasText && (
          <div className={clsx(styles.collageCaption, isCaptionTop && styles.collageCaptionTop)}>
            {title && (
              <h2 className={styles.captionTitle} id={`slide-title-${slide.id}`}>
                {title}
              </h2>
            )}
            {caption && (
              <p className={clsx(styles.captionText, !title && styles.captionTextSolo)}>
                {caption}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  if (slide.type === "video") {
    return <VideoSlideContent slide={slide} />;
  }

  if (slide.type === "message" && slide.messageLayout === "postcard") {
    return <PostcardSlideContent slide={slide} />;
  }

  return <StampedNoteSlideContent slide={slide} />;
};
