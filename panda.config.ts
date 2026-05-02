import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Import generated helpers through the project alias.
  importMap: "@styled-system",

  // Generate JSX helpers for React if the app needs them later.
  jsxFramework: "react",

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          cream: { value: "#FFF7ED" },
          blush: { value: "#FADADD" },
          coral: { value: "#F9735B" },
          rose: { value: "#E85D75" },
          ink: { value: "#3B2F2F" },
          skyMuted: { value: "#A9C7D8" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
