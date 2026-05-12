import benediction from "@/assets/audio/benediction.mp3";
import dancingInTheMoonlight from "@/assets/audio/dancing-in-the-moonlight.mp3";
import prettyGirl from "@/assets/audio/pretty-girl.mp3";
import sessoSamba from "@/assets/audio/sesso-e-samba.mp3";
import sirens from "@/assets/audio/sirens.mp3";
import type { SlideSoundtrack } from "./types";

export const soundtrack = {
  prettyGirl: {
    id: "pretty-girl",
    src: prettyGirl,
    title: "Pretty Girl",
  },
  sessoSamba: {
    id: "sesso-samba",
    src: sessoSamba,
    title: "Sesso E Samba",
  },
  dancingInTheMoonlight: {
    id: "dancing-in-the-moonlight",
    src: dancingInTheMoonlight,
    title: "Dancing in the Moonlight",
  },
  benediction: {
    id: "benediction",
    src: benediction,
    title: "Benediction",
  },
  sirens: {
    id: "sirens",
    src: sirens,
    title: "Sirens",
  },
} satisfies Record<string, SlideSoundtrack>;
