import { css } from "@styled-system/css";

export const styles = {
  controls: css({
    position: "relative",
    zIndex: "3",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    alignItems: "center",
    gap: "3",
    px: { base: "4", md: "8" },
    pt: "2",
    pb: { base: "4", md: "6" },
    bg: "linear-gradient(180deg, rgba(255, 247, 237, 0), rgba(255, 247, 237, 0.82) 42%, rgba(255, 247, 237, 0.95))",
  }),
  previousButton: css({
    justifySelf: "start",
  }),
  nextButton: css({
    justifySelf: "end",
  }),
  replayArea: css({
    gridColumn: "2",
    minW: "0",
  }),
};
