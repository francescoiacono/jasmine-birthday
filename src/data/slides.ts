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
    messageLayout: "postcard",
    title: "A little trip down memory lane for our favourite traveller",
    body: "We may not be able to celebrate side by side this year, but we hope that this little gift is a reminder that you’re always in our heads and in our hearts, not just today but always.",
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
    caption: "Freshers fun and coolest colleagues",
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
    messageLayout: "chapter-ending",
    title: "Where it all began",
    body: "We owe a big thank you to Gardens uni halls and to the fox on the hill for bringing together these two special friendships, that turned into a deep rooted family filled with more love than we ever expected.",
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
    caption: "Baby us and all our phases",
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
    messageLayout: "chapter-ending",
    title: "The Golden Oldies",
    body: "Looking back on these first moments together, makes us appreciate all the growth and life changes we have been through while always having eachother. Young us didn’t know that these moments we were living together would become some of the most treasured memories.",
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
    caption: "Scary? Not really. Iconic? Always.",
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
    messageLayout: "chapter-ending",
    title: "The Halloweens",
    body: "Always an absolute staple in our yearly antics. The most fun and hectic days getting ourselves (and the house) ready, and the most silly and funny nights celebrating.",
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
    caption: "Birthday nights, big hugs, and the best kind of chaos",
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
    caption: "Another year, another reason to celebrate you",
    captionPlacement: "top",
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
    messageLayout: "chapter-ending",
    title: "The Birthdays",
    body: "Even though we’re not together for the birthdays this year, we have nothing but gratitude for all the celebrations we’ve had together. Each one a reminder of another year we’ve been lucky enough to have you in our lives.",
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
    caption: "Beach days and sightseeing",
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
    caption: "Sunsets and shared toilets",
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
    messageLayout: "chapter-ending",
    title: "The Holidays Together",
    body: "Amsterdam, Barca, camping trips, Greece, Cumbria, Ischia, and future endeavours pending",
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
    caption: "Just some of many",
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
    messageLayout: "chapter-ending",
    title: "The All Around Good Times",
    body: "Belly laughs, sillyness, singing and dancing, naughtiness, wholesomeness and everything in between. Whether it’s been parties or regular days, every moment with you is so treasured.",
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
    caption: "A new tiny family member",
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
    id: "aunti-jas-ending",
    type: "message",
    messageLayout: "chapter-ending",
    title: "Aunti Jas' First Hello",
    body: "Having you by our side whilst the little one was pending, will forever be one of the most sacred chapters of our lives. We wouldn’t change it for the world. This little boy has no idea of all the love and memories that are coming his way with the bestest auntie.",
  },
  {
    id: "where-it-all-began-video",
    type: "video",
    video: {
      src: whereItAllBeganVideo,
      label: "A short selfie video of two friends smiling together under colourful lights.",
    },
  },
  {
    id: "golden-oldies-video",
    type: "video",
    video: {
      src: goldenOldiesVideo,
      label: "A short close-up video of two friends laughing together.",
    },
  },
  {
    id: "birthdays-video",
    type: "video",
    video: {
      src: birthdaysVideo,
      label: "A short birthday party video with people dancing together.",
    },
  },
  {
    id: "holidays-together-video",
    type: "video",
    video: {
      src: holidaysVideo,
      label: "A short nighttime holiday video with friends in a dark reflected scene.",
    },
  },
  {
    id: "final-ordinary-days",
    type: "message",
    messageLayout: "chapter-ending",
    soundtrack: soundtrack.sirens,
    body: "Today we are so grateful for the journey we’ve all been on together. Our friendship and family is one that feels safe, warm, and never changing. Looking back now, we should’ve been more grateful of even the most ordinary days spent with you. Waking up and you coming into our bed while we decide how to drag Francesco out into the sunshine with us. You making your porridge and us making our eggs, the strolls into Greenwich while we talk about anything and everything filled with ice coffees, ice creams, market food. A few ciders and cigs in a pub garden, a movie night and home cooking or takeout. We would do anything to re live one of those days, we didn’t realise how lucky we were whilst we were living them.",
  },
  {
    id: "final-baby-us",
    type: "message",
    messageLayout: "chapter-ending",
    body: "Not to mention a day in the life of baby us, smoking till we could barely speak through our dry mouth. Laughing uncontrollably till our bellies hurt, making the most ridiculous munchy meals, talking about our creative inspirations, listening to music that felt like it was hitting the soul, and having the most special heart to heart chats while we were getting to know each other on such a deep level, we were in the middle of creating a bond so unbreakable and had no idea of the journey we would go on to have together.",
  },
  {
    id: "final-wish-2",
    type: "message",
    messageLayout: "chapter-ending",
    body: "As we mark your 27th year, the strength and resilience you’ve shown this year is undoubtable. You’ve been so adventurous, independent, grounded, thoughtful, you’ve been through ups and downs but have always come back to the same jassy t positive and loving energy that you’ve always had. You love so strongly and you care so deeply about the people and the world around you. You always want to be the best version of yourself whilst your lifting up the people around you. Your friendship has truly felt like home for so many years now. Life may look a little different now but the family, support, and love will always remain the same.",
  },
  {
    id: "final-goodbye",
    type: "final",
    title: "Happy birthday, Jasmine",
    body: "Thank god for the memories and the life we have being your family. Thank god for another year of our jassy t. Happy birthday beautiful 🩵",
  },
] satisfies readonly Slide[];
