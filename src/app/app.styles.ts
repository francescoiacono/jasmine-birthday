import { css } from "@styled-system/css";

export const styles = {
  shell: css({
    display: "grid",
    minH: "100svh",
    placeItems: "center",
    px: "8",
    textAlign: "center",
    color: "ink",
    bg: "cream",
  }),
  title: css({
    m: "0",
    fontSize: { base: "2.5rem", sm: "3rem" },
    fontWeight: "700",
    lineHeight: "1.1",
  }),
};
