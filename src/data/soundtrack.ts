import benediction from "@/assets/audio/benediction.mp3";
import dancingInTheMoonlight from "@/assets/audio/dancing-in-the-moonlight.mp3";
import type { SlideSoundtrack } from "./types";

export const soundtrack = {
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
} satisfies Record<string, SlideSoundtrack>;
