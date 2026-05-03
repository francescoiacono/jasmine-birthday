import { css, cva, type RecipeVariantProps } from "@styled-system/css";

export const styles = {
  button: cva({
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      borderWidth: "1px",
      borderStyle: "solid",
      fontWeight: "850",
      lineHeight: "1.2",
      cursor: "pointer",
      userSelect: "none",
      transition:
        "transform 160ms ease, border-color 160ms ease, background 160ms ease, box-shadow 160ms ease, color 160ms ease, opacity 160ms ease",
      _hover: {
        transform: "translateY(-1px)",
      },
      _focusVisible: {
        outline: "3px solid rgba(59, 47, 47, 0.86)",
        outlineOffset: "3px",
      },
      _active: {
        transform: "translateY(0)",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.45",
        pointerEvents: "none",
        transform: "none",
      },
    },
    variants: {
      fullWidth: {
        true: {
          w: "100%",
        },
      },
      selected: {
        true: {},
      },
      shape: {
        pill: {
          borderRadius: "999px",
        },
        rounded: {
          borderRadius: "8px",
        },
      },
      size: {
        sm: {
          minH: "2.75rem",
          gap: "2",
          px: "3",
          py: "2",
          fontSize: "0.9rem",
        },
        md: {
          minH: { base: "3.45rem", sm: "3.75rem" },
          gap: "2.5",
          px: { base: "4", sm: "5" },
          py: "3",
          fontSize: { base: "1rem", md: "1.08rem" },
        },
        lg: {
          minH: { base: "4rem", sm: "4.35rem" },
          gap: "2",
          px: { base: "5", sm: "6" },
          py: "3",
          fontSize: { base: "1.12rem", md: "1.26rem" },
        },
        iconSm: {
          w: "2.25rem",
          h: "2.25rem",
          gap: "0",
          p: "0",
        },
        iconMd: {
          w: { base: "3.35rem", sm: "3.8rem" },
          h: { base: "3.35rem", sm: "3.8rem" },
          gap: "0",
          p: "0",
        },
        iconLg: {
          w: { base: "3.75rem", sm: "4.25rem" },
          h: { base: "3.75rem", sm: "4.25rem" },
          gap: "0",
          p: "0",
        },
      },
      tone: {
        coral: {},
        ink: {},
      },
      variant: {
        ghost: {
          borderColor: "transparent",
          bg: "transparent",
          boxShadow: "none",
        },
        primary: {
          color: "cream",
        },
        secondary: {
          bg: "rgba(255, 251, 245, 0.86)",
          boxShadow: "0 4px 10px rgba(59, 47, 47, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.74)",
        },
      },
    },
    compoundVariants: [
      {
        tone: "coral",
        variant: "primary",
        css: {
          borderColor: "rgba(232, 93, 117, 0.55)",
          bg: "linear-gradient(180deg, #F86F66 0%, #EA5F59 100%)",
          boxShadow: "0 8px 16px rgba(232, 93, 117, 0.14), 0 1px 0 rgba(59, 47, 47, 0.06)",
          _hover: {
            bg: "linear-gradient(180deg, #FF766B 0%, #EE625E 100%)",
          },
        },
      },
      {
        tone: "ink",
        variant: "primary",
        css: {
          borderColor: "ink",
          bg: "ink",
          boxShadow: "0 8px 16px rgba(59, 47, 47, 0.14)",
          _hover: {
            borderColor: "coral",
            bg: "coral",
          },
        },
      },
      {
        tone: "coral",
        variant: "secondary",
        css: {
          borderColor: "rgba(59, 47, 47, 0.12)",
          color: "ink",
          _hover: {
            borderColor: "rgba(232, 93, 117, 0.34)",
          },
        },
      },
      {
        selected: true,
        tone: "coral",
        variant: "secondary",
        css: {
          borderColor: "rgba(232, 93, 117, 0.55)",
          color: "cream",
          bg: "linear-gradient(180deg, #F86F66 0%, #EA5F59 100%)",
          boxShadow: "0 8px 16px rgba(232, 93, 117, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.28)",
        },
      },
      {
        tone: "ink",
        variant: "secondary",
        css: {
          borderColor: "rgba(59, 47, 47, 0.1)",
          color: "rgba(59, 47, 47, 0.76)",
          _hover: {
            borderColor: "rose",
            color: "ink",
            bg: "rgba(250, 218, 221, 0.82)",
          },
        },
      },
      {
        tone: "ink",
        variant: "ghost",
        css: {
          color: "ink",
          _hover: {
            bg: "rgba(250, 218, 221, 0.52)",
          },
        },
      },
    ],
    defaultVariants: {
      shape: "pill",
      size: "md",
      tone: "coral",
      variant: "secondary",
    },
  }),
  icon: css({
    display: "inline-flex",
    flexShrink: "0",
    pointerEvents: "none",
    "& svg": {
      display: "block",
    },
  }),
};

/** Variant props accepted by the shared button recipe. */
export type ButtonStyleProps = NonNullable<RecipeVariantProps<typeof styles.button>>;
