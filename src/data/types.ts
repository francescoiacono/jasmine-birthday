/** Image metadata used by photo-based slides. */
export interface SlideImage {
  /** Imported Vite asset URL for the image. */
  src: string;
  /** Accessible description of the image content. */
  alt: string;
}

/** Caption or subtitle track metadata used by video slides. */
export interface SlideVideoTrack {
  /** Imported Vite asset URL for the WebVTT text track. */
  src: string;
  /** BCP 47 language code for the track, such as "en". */
  srcLang: string;
  /** Human-readable track label shown by browser video controls. */
  label: string;
  /** Native text track kind; defaults to captions when omitted. */
  kind?: "captions" | "subtitles" | "descriptions";
  /** Whether this track should be selected by default. */
  default?: boolean;
}

/** Video metadata used by short video slides. */
export interface SlideVideo {
  /** Imported Vite asset URL for the video file. */
  src: string;
  /** Accessible name describing the video content or purpose. */
  label: string;
  /** Optional poster image shown before video playback begins. */
  poster?: SlideImage;
  /** Optional caption, subtitle, or description tracks for the video. */
  tracks?: readonly SlideVideoTrack[];
  /** Whether the video should begin playback when the slide appears. */
  autoPlay?: boolean;
  /** Whether the video should loop after it reaches the end; defaults to true. */
  loop?: boolean;
  /** Whether the video should be muted; defaults to audible playback. */
  muted?: boolean;
}

/** Supported positions for slide captions. */
export type CaptionPlacement = "bottom" | "top";

/** Visual treatments available for text-only message slides. */
export type MessageLayout = "postcard" | "chapter-ending";

/** Audio track that can be cued by a slideshow slide. */
export interface SlideSoundtrack {
  /** Stable identifier for the audio track. */
  id: string;
  /** Imported Vite asset URL for the audio file. */
  src: string;
  /** Human-readable track title used by music controls. */
  title: string;
}

/** Shared content fields for every slideshow slide. */
interface BaseSlide {
  /** Stable slide identifier used for rendering and transitions. */
  id: string;
  /** Optional short heading shown to the viewer. */
  title?: string;
  /** Optional audio track that starts from this slide onward. */
  soundtrack?: SlideSoundtrack;
}

/** Text-only slide used for story beats and wishes. */
export interface MessageSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "message";
  /** Visual treatment used by the message renderer. */
  messageLayout: MessageLayout;
  /** Optional main text content for the slide. */
  body?: string;
}

/** Full-screen single-photo slide with a short caption. */
export interface SinglePhotoSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "single-photo";
  /** Optional short supporting message for the photo. */
  caption?: string;
  /** Optional position for the photo caption; defaults to bottom. */
  captionPlacement?: CaptionPlacement;
  /** Imported Vite asset URL and alt text for the photo. */
  image: SlideImage;
}

/** Multi-photo slide used for a compact collage moment. */
export interface PhotoCollageSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "photo-collage";
  /** Optional short supporting message for the collage. */
  caption?: string;
  /** Optional position for the collage caption; defaults to bottom. */
  captionPlacement?: CaptionPlacement;
  /** Imported Vite asset URLs and alt text for each collage item. */
  images: readonly SlideImage[];
}

/** Short native video slide with optional caption text. */
export interface VideoSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "video";
  /** Optional short supporting message for the video. */
  caption?: string;
  /** Optional position for the video caption; defaults to bottom. */
  captionPlacement?: CaptionPlacement;
  /** Imported Vite asset URL and accessibility metadata for the video. */
  video: SlideVideo;
}

/** Final slide that closes the birthday journey. */
export interface FinalSlide extends BaseSlide {
  /** Slide variant used to select the renderer. */
  type: "final";
  /** Optional heartfelt closing message for the viewer. */
  body?: string;
}

/** Supported slide variants for the birthday journey. */
export type Slide = MessageSlide | SinglePhotoSlide | PhotoCollageSlide | VideoSlide | FinalSlide;
