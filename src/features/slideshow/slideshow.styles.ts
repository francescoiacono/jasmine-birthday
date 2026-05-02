import { css } from "@styled-system/css";

export const styles = {
  shell: css({
    position: "relative",
    minH: "100svh",
    overflow: "hidden",
    color: "ink",
    bg: "cream",
    backgroundImage:
      "linear-gradient(180deg, rgba(250, 218, 221, 0.46), rgba(255, 247, 237, 0.82) 34%, rgba(169, 199, 216, 0.34))",
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
  }),
  tripScreen: css({
    minH: "100svh",
    display: "grid",
    gridTemplateRows: "auto minmax(0, 1fr) auto",
  }),
};
