import { css } from "@styled-system/css";

export const styles = {
  shell: css({
    position: "relative",
    minH: "100svh",
    overflow: "hidden",
    color: "ink",
    bg: "cream",
    backgroundImage: `linear-gradient(180deg, var(--colors-blush-alpha-50), var(--colors-cream-alpha-80) 34%, var(--colors-sky-muted-alpha-35))`,
    fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
  }),
  tripScreen: css({
    minH: "100svh",
    display: "grid",
    gridTemplateRows: "auto minmax(0, 1fr) auto",
  }),
};
