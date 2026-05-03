import { css } from "@styled-system/css";

export const styles = {
  controls: css({
    position: "relative",
    zIndex: "3",
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr) auto",
    alignItems: "center",
    gap: { base: "3", sm: "4" },
    px: { base: "4", md: "8" },
    pt: "2",
    pb: { base: "4", md: "6" },
    bg: `linear-gradient(180deg, var(--colors-cream-alpha-0), var(--colors-cream-alpha-80) 42%, var(--colors-cream-alpha-95))`,
  }),
  previousButton: css({
    justifySelf: "start",
  }),
  nextButton: css({
    justifySelf: "end",
  }),
  continueHint: css({
    m: "0",
    justifySelf: "center",
    color: "inkAlpha.80",
    fontSize: { base: "0.8rem", sm: "0.88rem" },
    fontWeight: "800",
    lineHeight: "1.15",
    textAlign: "center",
    userSelect: "none",
    whiteSpace: "nowrap",
  }),
  replayArea: css({
    gridColumn: "2 / 4",
    minW: "0",
  }),
};
