export const en = {
  slideshow: {
    birthdayName: "Jasmine",
    finalStamp: "Birthday arrival",
    introBody:
      "A warm little travel journal for the person who makes ordinary days feel worth collecting.",
    introStamp: "Birthday passport",
    introTitle: "Jasmine's birthday trip",
    journeyLabel: "Birthday slideshow",
    messageStamp: "Postcard",
    musicNo: "No, quiet",
    musicPrompt: "Play with music?",
    muteMusicLabel: (trackTitle: string) => `Mute ${trackTitle}`,
    musicYes: "Yes, music",
    nextButton: "Next",
    previousButton: "Back",
    progressLabel: "Trip progress",
    replayButton: "Replay the trip",
    resumeMusicLabel: (trackTitle: string) => `Resume ${trackTitle}`,
    slideStatus: (current: number, total: number) => `${current} of ${total}`,
    soundtrackFallback: "music",
    startButton: "Start the trip",
  },
} as const;
