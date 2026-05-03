<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.

<!--VITE PLUS END-->

# Project Notes

## Maintaining This File

- Keep this file updated when making important project-wide decisions about structure, naming, styling, state, data access, validation, deployment, or tooling.
- Do not document one-off implementation details here; only record conventions that future work should follow.

## Product Direction

Build a mobile-first birthday slideshow website for a friend who is travelling and far away this year.

The product should feel like a personal digital gift rather than a generic website. The preferred UX direction is a tap-through birthday story with a warm travel-journal / birthday-passport theme.

MVP scope:

- Show a mobile-first intro screen with a clear start action.
- Offer a music choice before the slideshow begins, using a visible `Play with music?` toggle or yes/no choice.
- Present a sequence of full-screen slides containing memories, photos, collages, short messages, and birthday wishes.
- Support simple story-like navigation: tap or swipe forward and backward.
- Show lightweight progress feedback so the viewer knows where they are in the journey.
- End on a heartfelt final slide with a single `Replay the trip` action.
- Do not include an external CTA on the final slide.

Technical direction:

- Planned stack is Vite+ + React + TypeScript, PandaCSS, Lucide React, Motion, `clsx`, and optionally `canvas-confetti` for the final moment.
- No router is needed. Keep the app as a single, state-driven slideshow experience.
- Store slide content in typed data files rather than hard-coding it directly into components.
- Serve photos as local Vite assets from `src/assets` unless the project grows beyond the agreed scope.
- Optimise images manually before committing them, favouring WebP where practical.
- Deploy with Docker on a VPS using Dokploy.
- The domain is managed through Cloudflare.

## UX Principles

- Design mobile-first. Assume the primary and possibly only device is a phone.
- Prioritise emotional pacing over feature count.
- Keep each slide focused: one memory, one joke, one message, or one visual idea.
- Prefer short, readable copy over dense paragraphs.
- Make the experience usable with one thumb.
- Avoid visual clutter around primary interactions.
- Keep navigation discoverable but not heavy: tap zones, swipe gestures, and subtle hints are preferred over many visible buttons.
- Respect reduced-motion preferences. Animation should enhance the feeling of the gift, not block access to content.
- Music must only begin after a clear user gesture, such as choosing `Yes` or pressing `Start the trip`.

## Naming

- Use lowercase kebab-case for source file and folder names under `src`.
- Keep React component exports in PascalCase so JSX can render them normally.
- Prefer arrow functions assigned to `const` wherever the framework does not require a function declaration.
- Prefer named exports over default exports wherever the framework does not require a default export.
- Use required framework/tooling filenames as-is when a tool expects them, such as `AGENTS.md`, `README.md`, or config files.

## Structure

- Use a feature-first structure around the slideshow experience rather than horizontal buckets.
- Do not add a router or `routes` folder unless the product direction changes.
- Keep app-level wiring under `src/app/`.
- Keep `src/main.tsx` as the React entry point.
- Put slideshow-specific UI, state, helpers, and tests under `src/features/slideshow/`.
- Put each slideshow subcomponent in its own lowercase kebab-case folder with a `.tsx` file, a colocated `.styles.ts` file, and an `index.ts` export.
- Put shared reusable UI under `src/components/` only when it is genuinely useful outside the slideshow feature.
- Put typed slide content under `src/data/`.
- Put photos and audio under `src/assets/`.
- Use the `@/` import alias for shared or cross-feature imports from `src`.
- Add entry points with `index.ts` when they make imports cleaner, such as `@/app`, `@/data`, or `@/features/slideshow`.

Suggested structure:

```txt
src/
  app/
    app.tsx
  assets/
    audio/
    photos/
  components/
  data/
    slides.ts
  features/
    slideshow/
      components/
      hooks/
      slideshow.tsx
      slideshow.styles.ts
      types.ts
      utils.ts
  i18n/
    copy.ts
    locales/
      en.ts
  utils/
    cx.ts
  index.css
  main.tsx
```

## Slide Data

- Define slides in TypeScript data files, not inline in JSX.
- Use discriminated union types for slide variants such as intro, message, single photo, collage, and final slide.
- Define reusable soundtrack track metadata in `src/data/soundtrack.ts`, importing local audio assets from `src/assets/audio/`.
- Use an optional `soundtrack` cue on a slide to start that track from the slide onward; the cue remains active until another slide defines a different soundtrack.
- Keep slide copy concise and intentional.
- Every informative image needs useful alt text in the slide data.
- Decorative images should be marked so components can render empty alt text.
- Multi-photo slides should describe each image individually rather than using one generic alt value.

Example direction:

```ts
export type Slide =
  | {
      /** Slide variant used to select the renderer. */
      type: "single-photo";
      /** Short slide heading shown to the viewer. */
      title: string;
      /** Short supporting message for the slide. */
      caption: string;
      /** Imported Vite asset URL for the image. */
      image: string;
      /** Accessible description of the image. */
      alt: string;
    }
  | {
      /** Slide variant used to select the renderer. */
      type: "photo-collage";
      /** Short slide heading shown to the viewer. */
      title: string;
      /** Short supporting message for the slide. */
      caption: string;
      /** Imported Vite asset URLs and alt text for collage items. */
      images: Array<{ src: string; alt: string }>;
    }
  | {
      /** Slide variant used to select the renderer. */
      type: "message";
      /** Short slide heading shown to the viewer. */
      title: string;
      /** Main text content for the slide. */
      body: string;
    };
```

## Images And Media

- Use local imported Vite assets for slideshow images by default.
- Put primary photos in `src/assets/photos/`.
- Put music or sound files in `src/assets/audio/`.
- Prefer WebP for photos unless another format is necessary.
- Keep source/original photos outside the app if they are large and not directly used at runtime.
- Target mobile-friendly images, usually around 1080px to 1440px wide for full-screen photos.
- Use smaller exports for collage-only photos that never display full-screen.
- Aim for roughly 150KB to 350KB per optimised photo when practical.
- Avoid loading every image upfront when the slideshow may contain many photos.
- Preload the first few slides after the intro and then preload the next one or two slides as the viewer advances.
- For multi-photo slides, preload only the upcoming slide's images and lazy-load secondary images where appropriate.
- Use Cloudflare as a normal CDN in front of the VPS, but do not introduce Cloudflare Images unless the project grows into a reusable upload-based app or requires dynamic image transformations.

## State

- Keep state local to the slideshow unless a clear cross-app need appears.
- Do not add Zustand, Redux, React Query, or another state library for the MVP.
- Track current slide index, music preference, playback state, and transition direction with React state.
- Keep derived slideshow values, such as progress percentage and next slide, as derived values rather than duplicated state.
- Persist state only if there is a product reason to resume the experience after reload.

## Animation

- Use Motion for slide transitions, reveal animations, tap feedback, and small celebratory moments.
- Keep transitions short and responsive on mobile.
- Avoid animation that delays reading or interaction.
- Gate non-essential animations behind reduced-motion checks.
- Prefer opacity and transform animations over layout-heavy animations.
- Do not add Swiper or another carousel library unless custom tap/swipe handling becomes a maintenance problem.

## Icons

- Use `lucide-react` for UI icons.
- Import icons directly by name to keep usage explicit.
- Keep icon usage decorative unless the icon communicates meaning not present in text.
- Provide accessible names for icon-only buttons.
- Hide purely decorative icons from assistive technologies.

## Styling

- Use PandaCSS for component and feature styles.
- Import Panda generated modules through `@styled-system/*`.
- Put component styles in a colocated `.styles.ts` file.
- Export a named object called `styles` from each `.styles.ts` file.
- Define style values inside that `styles` object using Panda's `css()` function.
- Keep `.tsx` files focused on markup and behavior by importing `styles` from the colocated style file.
- Use `clsx` for conditional class composition.
- Do not introduce `tailwind-merge`; it is unnecessary with PandaCSS unless the styling approach changes.
- Keep global CSS in `src/index.css` limited to Panda layers, resets, and document-level defaults.
- The generated `styled-system` folder is ignored; run `vp run panda:codegen` if it needs to be recreated.
- Keep app colors in `panda.config.ts` and use those Panda tokens in component styles instead of one-off hex or rgba values.
- Prefer design tokens for repeated colors, spacing, radii, shadows, and typography.
- Preserve the intended visual direction: warm, personal, polished, travel-journal inspired, birthday-passport themed, and mobile-first.

Core visual tokens:

```ts
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
}
```

## Copy And I18n

- Keep user-facing strings in the i18n copy layer rather than hard-coding them in components.
- Use `src/i18n/locales/en.ts` as the English source copy file.
- Import copy through `src/i18n/copy.ts` so a future full i18n provider can replace that entry point without changing every component.
- Do not add a full i18n runtime library until the app needs locale switching, formatting, pluralization, or external translation workflows.
- Keep alt text, accessible labels, button labels, music prompts, and navigation hints in the copy layer when they are user-facing.

## Deployment

- Build the production container with the root `Dockerfile`.
- The Docker runtime serves the Vite build from Nginx on port `8080` unless the deployment setup explicitly chooses another static server.
- Deploy the container on the VPS using Dokploy.
- Keep Cloudflare in front of the domain for DNS, TLS, and CDN caching.
- Keep app shell responses and `index.html` uncached or revalidated at the HTTP layer so new deploys are discovered promptly.
- Cache fingerprinted files under `/assets/` immutably.
- Do not cache service worker files aggressively if a PWA is added later.

Recommended cache direction:

```nginx
location /assets/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}

location / {
  try_files $uri /index.html;
  add_header Cache-Control "no-cache";
}
```

## Accessibility

- Treat WCAG 2.2 AA as the baseline for user-facing work, and prefer inclusive defaults even when a requirement is not explicitly covered by automated checks.
- Start with semantic HTML: use meaningful landmarks, headings in document order, lists for grouped content, and native links or buttons for interactive controls before reaching for ARIA.
- Give every interactive control an accessible name, a visible focus state, and keyboard behavior that works with Tab, Shift+Tab, Enter, Escape, and Space where those keys are expected.
- Support keyboard navigation for previous, next, start, replay, and music controls.
- Keep visible text, accessible labels, image alt text, helper text, and status messages in the i18n copy layer when they are user-facing.
- Do not remove browser focus outlines without replacing them with a clearly visible PandaCSS focus style that passes contrast expectations.
- Do not rely on color alone to convey state. Pair color with text, iconography, shape, or another non-color cue.
- Respect reduced-motion preferences for non-essential animation, transitions, parallax, smooth scrolling, and auto-playing movement.
- Do not auto-play music without a user gesture.
- Provide a clear way to mute or stop music after it starts.
- For images and media, provide useful alt text for informative content, empty alt text for decorative images, captions or transcripts when needed, and avoid text embedded only in images.
- Validate substantial UI changes with keyboard-only navigation and at least one accessibility-oriented check, such as browser accessibility inspection or an automated audit, in addition to `vp check`.

## Documentation

- Add TSDoc comments to utility functions and hook functions, including functions defined inside components or hooks.
- Add a one-line TSDoc summary to each type and interface.
- Add a one-line TSDoc comment to each attribute in each type or interface.
- Add inline comments only for complex logic or major function sections where they improve readability.
- Keep comments concise and focused on intent, constraints, or non-obvious behavior.

## Validation

- Run `vp check` after source changes.
- Run `vp run build` when root, styling, dependency, asset handling, Docker, or build-related files change.
- Run `vp test` when tests exist or when changes touch tested behavior.
- If no test files exist, note that `vp test` exits because there are no matching test files.
- Run `vp run panda:codegen` if Panda generated files need to be recreated.
- Check mobile viewport behavior before considering slideshow UX complete.
- Check at least one real mobile device or browser mobile simulator before final delivery.
