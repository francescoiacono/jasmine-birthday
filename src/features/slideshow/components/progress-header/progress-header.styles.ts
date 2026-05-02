import { css } from "@styled-system/css";

export const styles = {
  progressArea: css({
    position: "relative",
    zIndex: "3",
    display: "grid",
    gap: "2",
    px: { base: "4", md: "8" },
    pt: { base: "4", md: "6" },
    pb: "2",
  }),
  progressMeta: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "3",
    fontSize: "0.78rem",
    fontWeight: "800",
    color: "rgba(59, 47, 47, 0.74)",
  }),
  progressLabel: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    textTransform: "uppercase",
    letterSpacing: "0",
  }),
  progressTrack: css({
    h: "0.35rem",
    overflow: "hidden",
    borderRadius: "999px",
    bg: "rgba(59, 47, 47, 0.13)",
  }),
  progressFill: css({
    h: "100%",
    borderRadius: "999px",
    bg: "rose",
    transition: "width 220ms ease",
  }),
};
