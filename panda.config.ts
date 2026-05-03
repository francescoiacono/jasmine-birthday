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
        // Source of truth for the birthday-passport palette used across the app.
        colors: {
          cream: { value: "#FFF7ED" },
          creamSoft: { value: "#FFFBF5" },
          blush: { value: "#FADADD" },
          blushDeep: { value: "#F6A9B4" },
          coral: { value: "#F9735B" },
          rose: { value: "#E85D75" },
          ink: { value: "#3B2F2F" },
          inkDeep: { value: "#2C2220" },
          gold: { value: "#A17029" },
          skyMuted: { value: "#A9C7D8" },
          blackAlpha: {
            "24": { value: "rgba(0, 0, 0, 0.24)" },
          },
          creamAlpha: {
            "0": { value: "rgba(255, 247, 237, 0)" },
            "30": { value: "rgba(255, 247, 237, 0.3)" },
            "40": { value: "rgba(255, 247, 237, 0.4)" },
            "50": { value: "rgba(255, 247, 237, 0.5)" },
            "80": { value: "rgba(255, 247, 237, 0.8)" },
            "90": { value: "rgba(255, 247, 237, 0.9)" },
            "95": { value: "rgba(255, 247, 237, 0.95)" },
          },
          inkAlpha: {
            "05": { value: "rgba(59, 47, 47, 0.05)" },
            "06": { value: "rgba(59, 47, 47, 0.06)" },
            "08": { value: "rgba(59, 47, 47, 0.08)" },
            "10": { value: "rgba(59, 47, 47, 0.1)" },
            "12": { value: "rgba(59, 47, 47, 0.12)" },
            "14": { value: "rgba(59, 47, 47, 0.14)" },
            "16": { value: "rgba(59, 47, 47, 0.16)" },
            "18": { value: "rgba(59, 47, 47, 0.18)" },
            "22": { value: "rgba(59, 47, 47, 0.22)" },
            "24": { value: "rgba(59, 47, 47, 0.24)" },
            "80": { value: "rgba(59, 47, 47, 0.8)" },
            "86": { value: "rgba(59, 47, 47, 0.86)" },
          },
          roseAlpha: {
            "12": { value: "rgba(232, 93, 117, 0.12)" },
            "18": { value: "rgba(232, 93, 117, 0.18)" },
            "32": { value: "rgba(232, 93, 117, 0.32)" },
            "50": { value: "rgba(232, 93, 117, 0.5)" },
            "58": { value: "rgba(232, 93, 117, 0.58)" },
          },
          blushAlpha: {
            "50": { value: "rgba(250, 218, 221, 0.5)" },
            "80": { value: "rgba(250, 218, 221, 0.8)" },
          },
          skyMutedAlpha: {
            "35": { value: "rgba(169, 199, 216, 0.35)" },
          },
          goldAlpha: {
            "12": { value: "rgba(161, 112, 41, 0.12)" },
            "30": { value: "rgba(161, 112, 41, 0.3)" },
            "40": { value: "rgba(161, 112, 41, 0.4)" },
            "80": { value: "rgba(161, 112, 41, 0.8)" },
            "90": { value: "rgba(161, 112, 41, 0.9)" },
          },
          whiteAlpha: {
            "30": { value: "rgba(255, 255, 255, 0.3)" },
            "70": { value: "rgba(255, 255, 255, 0.7)" },
          },
          inkDeepAlpha: {
            "64": { value: "rgba(44, 34, 32, 0.64)" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
