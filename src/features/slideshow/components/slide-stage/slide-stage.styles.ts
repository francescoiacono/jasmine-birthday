import { css } from "@styled-system/css";

export const styles = {
  stage: css({
    position: "relative",
    minH: "0",
    overflow: "hidden",
    touchAction: "pan-y",
    userSelect: "none",
    cursor: "pointer",
  }),
  slideArticle: css({
    position: "absolute",
    inset: "0",
    display: "grid",
    minH: "100%",
    px: { base: "4", md: "8" },
    py: { base: "5", md: "8" },
  }),
};
