/** Image metadata used by photo-based slides. */
export interface SlideImage {
  /** Imported Vite asset URL for the image. */
  src: string;
  /** Accessible description of the image content. */
  alt: string;
}

/** Supported positions for slide captions. */
export type CaptionPlacement = "bottom" | "top";

/** Shared content fields for every slideshow slide. */
interface BaseSlide {
  /** Stable slide identifier used for rendering and transitions. */
  id: string;
  /** Short heading shown to the viewer. */
  title: string;
}

/** Text-only slide used for story beats and wishes. */
export interface MessageSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "message";
  /** Main text content for the slide. */
  body: string;
}

/** Full-screen single-photo slide with a short caption. */
export interface SinglePhotoSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "single-photo";
  /** Short supporting message for the photo. */
  caption: string;
  /** Optional position for the photo caption; defaults to bottom. */
  captionPlacement?: CaptionPlacement;
  /** Imported Vite asset URL and alt text for the photo. */
  image: SlideImage;
}

/** Multi-photo slide used for a compact collage moment. */
export interface PhotoCollageSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "photo-collage";
  /** Short supporting message for the collage. */
  caption: string;
  /** Optional position for the collage caption; defaults to bottom. */
  captionPlacement?: CaptionPlacement;
  /** Imported Vite asset URLs and alt text for each collage item. */
  images: readonly SlideImage[];
}

/** Final slide that closes the birthday journey. */
export interface FinalSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "final";
  /** Heartfelt closing message for the viewer. */
  body: string;
}

/** Supported slide variants for the birthday journey. */
export type Slide = MessageSlide | SinglePhotoSlide | PhotoCollageSlide | FinalSlide;
