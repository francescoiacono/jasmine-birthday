import photoOne from "@/assets/photos/image_01.webp";
import photoTwo from "@/assets/photos/image_02.webp";
import photoThree from "@/assets/photos/image_03.webp";
import photoFour from "@/assets/photos/image_04.webp";
import { soundtrack } from "./soundtrack";
import type { Slide } from "./types";

export const slides = [
  {
    id: "opening-note",
    type: "message",
    title: "A little trip for your birthday",
    body: "Since you are far away this year, I made you a tiny passport through some of my favourite Jasmine moments.",
    soundtrack: soundtrack.benediction,
  },
  {
    id: "laughing-close-up",
    type: "single-photo",
    title: "The laugh stamp",
    caption: "The kind of photo where the blur is doing exactly what the memory felt like.",
    image: {
      src: photoOne,
      alt: "Two people smiling close to the camera indoors.",
    },
  },
  {
    id: "pub-toast",
    type: "single-photo",
    title: "Pub diplomacy",
    caption: "A pint, a dramatic point, and a conversation that probably deserved minutes.",
    image: {
      src: photoTwo,
      alt: "Jasmine sitting in a pub with a drink and white dots on her face and arm.",
    },
  },
  {
    id: "soft-landing",
    type: "single-photo",
    title: "Soft landing",
    caption: "Proof that even loud nights can keep a very soft corner.",
    captionPlacement: "top",
    soundtrack: soundtrack.dancingInTheMoonlight,
    image: {
      src: photoThree,
      alt: "Jasmine resting her head against someone while sitting in a pub.",
    },
  },
  {
    id: "night-out-collage",
    type: "photo-collage",
    title: "Carry-on chaos",
    caption: "A few stamps from the department of excellent decisions and questionable balance.",
    images: [
      {
        src: photoFour,
        alt: "Jasmine smiling while riding on someone's back in a colourful venue.",
      },
      {
        src: photoOne,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: photoThree,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "final-wish",
    type: "final",
    title: "Happy birthday, Jasmine",
    body: "I hope today feels warm, funny, a bit ridiculous, and full of reminders that you are loved from wherever we all are.",
  },
] satisfies readonly Slide[];
