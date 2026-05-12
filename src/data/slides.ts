import whereItAllBegan1 from "@/assets/photos/where-it-all-began-1.webp";
import whereItAllBegan2 from "@/assets/photos/where-it-all-began-2.webp";
import whereItAllBeganIntro from "@/assets/photos/where-it-all-began-intro.webp";
import theGoldenOldiesIntro from "@/assets/photos/the-golden-oldies-intro.webp";
import theGoldenOldies1 from "@/assets/photos/the-golden-oldies-1.webp";
import theGoldenOldies2 from "@/assets/photos/the-golden-oldies-2.webp";
import theGoldenOldies3 from "@/assets/photos/the-golden-oldies-3.webp";
import theGoldenOldies4 from "@/assets/photos/the-golden-oldies-4.webp";
import halloweenIntro from "@/assets/photos/halloween-intro.webp";
import halloween1 from "@/assets/photos/halloween-1.webp";
import halloween2 from "@/assets/photos/halloween-2.webp";
import halloween3 from "@/assets/photos/halloween-3.webp";
import halloween4 from "@/assets/photos/halloween-4.webp";
import birthdaysIntro from "@/assets/photos/birthdays-intro.webp";
import birthdays1 from "@/assets/photos/birthdays-1.webp";
import birthdays2 from "@/assets/photos/birthdays-2.webp";
import birthdays3 from "@/assets/photos/birthdays-3.webp";
import birthdays4 from "@/assets/photos/birthdays-4.webp";
import birthdays5 from "@/assets/photos/birthdays-5.webp";
import birthdays6 from "@/assets/photos/birthdays-6.webp";
import birthdays7 from "@/assets/photos/birthdays-7.webp";
import birthdays8 from "@/assets/photos/birthdays-8.webp";
import holidaysIntro from "@/assets/photos/holidays-intro.webp";
import holidays1 from "@/assets/photos/holidays-1.webp";
import holidays2 from "@/assets/photos/holidays-2.webp";
import holidays3 from "@/assets/photos/holidays-3.webp";
import holidays4 from "@/assets/photos/holidays-4.webp";
import holidays5 from "@/assets/photos/holidays-5.webp";
import holidays6 from "@/assets/photos/holidays-6.webp";
import holidays7 from "@/assets/photos/holidays-7.webp";
import holidays8 from "@/assets/photos/holidays-8.webp";
import auntieJasIntro from "@/assets/photos/aunti-jas-intro.webp";
import auntieJas1 from "@/assets/photos/aunti-jas-1.webp";
import auntieJas2 from "@/assets/photos/aunti-jas-2.webp";
import auntieJas3 from "@/assets/photos/aunti-jas-3.webp";
import auntieJas4 from "@/assets/photos/aunti-jas-4.webp";
import goodTimesIntro from "@/assets/photos/good-times-intro.webp";
import goodTimes1 from "@/assets/photos/good-times-1.webp";
import goodTimes2 from "@/assets/photos/good-times-2.webp";
import goodTimes3 from "@/assets/photos/good-times-3.webp";
import goodTimes4 from "@/assets/photos/good-times-4.webp";
import birthdaysVideo from "@/assets/videos/birthdays-video.mp4";
import goldenOldiesVideo from "@/assets/videos/golden-oldies-video.mp4";
import holidaysVideo from "@/assets/videos/holidays-video.mp4";
import whereItAllBeganVideo from "@/assets/videos/where-it-all-began-video.mp4";
import { soundtrack } from "./soundtrack";
import type { Slide } from "./types";

export const slides = [
  {
    id: "where-it-all-began-opening",
    type: "message",
    title: "A little trip for your birthday",
    body: "Since you are far away this year, I made you a tiny passport through some of my favourite Jasmine moments.",
    soundtrack: soundtrack.prettyGirl,
  },
  {
    id: "where-it-all-began-intro",
    type: "single-photo",
    title: "Where it all began",
    image: {
      src: whereItAllBeganIntro,
      alt: "Two people smiling close to the camera indoors.",
    },
  },
  {
    id: "where-it-all-began-1",
    type: "photo-collage",
    caption: "Freshers fun, and coolest colleagues",
    captionPlacement: "top",
    images: [
      {
        src: whereItAllBegan2,
        alt: "",
      },
      {
        src: whereItAllBegan1,
        alt: "",
      },
    ],
  },
  {
    id: "where-it-all-began-ending",
    type: "message",
    title: "END OF THE BEGINNING",
    body: "Since you are far away this year, I made you a tiny passport through some of my favourite Jasmine moments.",
  },

  {
    id: "golden-oldies-intro",
    type: "single-photo",
    title: "The Golden Oldies",
    image: {
      src: theGoldenOldiesIntro,
      alt: "",
    },
  },
  {
    id: "golden-oldies",
    type: "photo-collage",
    title: "The Golden Oldies",
    caption: "",
    images: [
      {
        src: theGoldenOldies1,
        alt: "",
      },
      {
        src: theGoldenOldies2,
        alt: "",
      },
      {
        src: theGoldenOldies3,
        alt: "",
      },
      {
        src: theGoldenOldies4,
        alt: "",
      },
    ],
  },
  {
    id: "golden-oldies-ending",
    type: "message",
    title: "END OF THE GOLDEN OLDIES",
    body: "PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA",
  },

  {
    id: "halloween-intro",
    type: "single-photo",
    title: "The Halloweens",
    soundtrack: soundtrack.benediction,
    image: {
      src: halloweenIntro,
      alt: "",
    },
  },
  {
    id: "halloween-1",
    type: "photo-collage",
    title: "The Halloweens",
    caption: "",
    images: [
      {
        src: halloween1,
        alt: "",
      },
      {
        src: halloween2,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: halloween3,
        alt: "Jasmine cuddled up at a pub table.",
      },
      {
        src: halloween4,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "halloween-ending",
    type: "message",
    title: "END OF THE HALLOWEENS",
    body: "PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA",
  },

  {
    id: "birthdays-intro",
    type: "single-photo",
    title: "The Birthdays",
    image: {
      src: birthdaysIntro,
      alt: "Two people smiling close to the camera indoors.",
    },
  },
  {
    id: "birthdays",
    type: "photo-collage",
    title: "The Birthdays",
    caption: "",
    images: [
      {
        src: birthdays1,
        alt: "Jasmine smiling while riding on someone's back in a colourful venue.",
      },
      {
        src: birthdays2,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: birthdays3,
        alt: "Jasmine cuddled up at a pub table.",
      },
      {
        src: birthdays4,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "birthdays-2",
    type: "photo-collage",
    title: "And more...",
    caption: "",
    images: [
      {
        src: birthdays5,
        alt: "Jasmine smiling while riding on someone's back in a colourful venue.",
      },
      {
        src: birthdays6,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: birthdays7,
        alt: "Jasmine cuddled up at a pub table.",
      },
      {
        src: birthdays8,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "birthdays-ending",
    type: "message",
    title: "END OF THE BIRTHDAYS",
    body: "PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA",
  },

  {
    id: "holidays-together-intro",
    type: "single-photo",
    title: "The Holidays Together",
    soundtrack: soundtrack.sessoSamba,
    image: {
      src: holidaysIntro,
      alt: "Two people smiling close to the camera indoors.",
    },
  },
  {
    id: "holidays-together",
    type: "photo-collage",
    caption: "",
    images: [
      {
        src: holidays1,
        alt: "Jasmine smiling while riding on someone's back in a colourful venue.",
      },
      {
        src: holidays2,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: holidays3,
        alt: "Jasmine cuddled up at a pub table.",
      },
      {
        src: holidays4,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "holidays-together-2",
    type: "photo-collage",
    title: "And more...",
    caption: "",
    images: [
      {
        src: holidays5,
        alt: "Jasmine smiling while riding on someone's back in a colourful venue.",
      },
      {
        src: holidays6,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: holidays7,
        alt: "Jasmine cuddled up at a pub table.",
      },
      {
        src: holidays8,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "holidays-together-ending",
    type: "message",
    title: "END OF THE HOLIDAYS TOGETHER",
    body: "PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA",
  },

  {
    id: "good-times-intro",
    type: "single-photo",
    title: "The All Around Good Times",
    image: {
      src: goodTimesIntro,
      alt: "Two people smiling close to the camera indoors.",
    },
  },
  {
    id: "good-times",
    type: "photo-collage",
    title: "The All Around Good Times",
    caption: "",
    images: [
      {
        src: goodTimes1,
        alt: "Jasmine smiling while riding on someone's back in a colourful venue.",
      },
      {
        src: goodTimes2,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: goodTimes3,
        alt: "Jasmine cuddled up at a pub table.",
      },
      {
        src: goodTimes4,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "good-times-ending",
    type: "message",
    title: "END OF THE ALL AROUND GOOD TIMES",
    body: "PAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPA",
  },
  {
    id: "aunti-jas-intro",
    type: "single-photo",
    title: "Aunti Jas' First Hello",
    soundtrack: soundtrack.dancingInTheMoonlight,
    image: {
      src: auntieJasIntro,
      alt: "Two people smiling close to the camera indoors.",
    },
  },
  {
    id: "aunti-jas-1",
    type: "photo-collage",
    title: "Aunti Jas' First Hello",
    caption: "",
    images: [
      {
        src: auntieJas1,
        alt: "Jasmine smiling while riding on someone's back in a colourful venue.",
      },
      {
        src: auntieJas2,
        alt: "Two people laughing together in a close indoor selfie.",
      },
      {
        src: auntieJas3,
        alt: "Jasmine cuddled up at a pub table.",
      },
      {
        src: auntieJas4,
        alt: "Jasmine cuddled up at a pub table.",
      },
    ],
  },
  {
    id: "where-it-all-began-video",
    type: "video",
    title: "Freshers in motion",
    caption: "A little moving proof of exactly where the story started.",
    video: {
      src: whereItAllBeganVideo,
      label: "A short selfie video of two friends smiling together under colourful lights.",
    },
  },
  {
    id: "golden-oldies-video",
    type: "video",
    title: "Golden oldies, live",
    caption: "Some memories are better when you can hear the laugh too.",
    video: {
      src: goldenOldiesVideo,
      label: "A short close-up video of two friends laughing together.",
    },
  },
  {
    id: "birthdays-video",
    type: "video",
    title: "A birthday clip",
    caption: "Because some birthday memories need motion.",
    video: {
      src: birthdaysVideo,
      label: "A short birthday party video with people dancing together.",
    },
  },
  {
    id: "holidays-together-video",
    type: "video",
    title: "Holiday evidence",
    caption: "A tiny clip from the travel files.",
    video: {
      src: holidaysVideo,
      label: "A short nighttime holiday video with friends in a dark reflected scene.",
    },
  },
  {
    id: "final-wish",
    type: "final",
    soundtrack: soundtrack.sirens,
    title: "Happy birthday, Jasmine",
    body: "I hope today feels warm, funny, a bit ridiculous, and full of reminders that you are loved from wherever we all are.",
  },
] satisfies readonly Slide[];
