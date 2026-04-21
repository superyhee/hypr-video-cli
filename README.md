# hypr-video-cli

[![npm version](https://img.shields.io/npm/v/hypr-video-cli.svg)](https://www.npmjs.com/package/hypr-video-cli)
[![license](https://img.shields.io/npm/l/hypr-video-cli.svg)](https://github.com/superyhee/hypr-video-cli/blob/main/LICENSE)

A Claude Code Skill for creating programmatic videos with CLI.

Describe your video in natural language, and Claude builds the config (text, shapes, animations, transitions, captions, keyframes, 50+ visual effects) and renders it to MP4 — all from your terminal. Powered by skia-canvas + FFmpeg.

## Demo

<p align="center">
  <img src="assets/demo-preview.gif" alt="hypr-video-cli demo preview" width="640" />
</p>

```
 "Create a product launch video"
            │
            ▼
   ┌─────────────────────┐
   │  Claude writes       │
   │  config .mjs         │
   └────────┬────────────┘
            │
            ▼
   node scripts/gen_canvas.mjs config.mjs output.json
            │
            ▼
   npx hypr-video-cli output.json -o output.mp4
            │
            ▼
       📹 output.mp4
```

## Features

- 🎬 Text, images, video clips, shapes, audio — all composable on a timeline
- ✨ 44 animations (fade, blur, slide, zoom, bounce, wave, per-character effects)
- 🔀 20+ transitions (crossfade, wipe, iris, glitch, blur between clips)
- 🎨 50+ visual effects (film grain, VHS, glow, rain, snow, color grading, and more)
- 🎯 Keyframe animation for position, scale, rotation, opacity over time
- 💬 Timed captions with word-level karaoke support
- 🎨 24 built-in themes with color palettes, type scale, and 11 role helpers
- 🖼️ 65 SVG helpers — orbs, dot grids, vignettes, particles, charts, and more
- 🔤 18 bundled fonts — Montserrat, Playfair Display, Fira Code, Noto Sans SC, and more
- 📐 Any aspect ratio — 16:9, 9:16 (TikTok/Reels), 1:1 (Instagram), 4:3
- 🤖 Claude Code Skill included — generate videos from natural language

## Quick Start

```bash
# Render from a JSON file
npx hypr-video-cli input.json -o output.mp4

# Install globally for repeated use
npm install -g hypr-video-cli
hypr-video-cli input.json -o output.mp4
```

Prerequisites: Node.js >= 20, FFmpeg installed and in PATH.

## Claude Code Skill

This project ships as a Claude Code skill — install it and Claude generates videos from natural language using the high-level config API.

```bash
# Clone the repo, then install the skill
git clone https://github.com/superyhee/hypr-video-cli.git
# In Claude Code:
/install-skill ./hypr-video-cli/skill
```

Then just describe what you want:

> "Create a 15-second SaaS promo video with a dark background, animated title, feature list that slides in, and a pricing CTA at the end"

Claude writes a config `.mjs`, generates the canvasState JSON via `gen_canvas.mjs`, and renders the MP4 — no manual JSON editing needed.

## Config-Based Workflow

Instead of writing raw JSON, you write a high-level config file using themes, role helpers, and SVG helpers. The `gen_canvas.mjs` script converts it to canvasState JSON.

```bash
# 1. Write config
# 2. Generate JSON
node scripts/gen_canvas.mjs /tmp/my-video.mjs /tmp/my-video.json
# 3. Render
npx hypr-video-cli /tmp/my-video.json -o ./output/my-video.mp4
```

### Config Structure

```js
export default function build(h) {
  const {
    makeShape, makeEffect, buildCanvas, theme, autoTracks,
    svgVignette, svgGradientOrb, svgDotGrid, svgParticles,
  } = h;

  const t = theme("cyberpunk");   // colors + type scale + role helpers + fonts
  const MAX = 20000;

  // Global background layers
  const g_dot = svgDotGrid("g_dot", { start: 0, end: MAX, opacity: 0.04, color: t.ACCENT });
  const g_vig = svgVignette("g_vig", { start: 0, end: MAX, opacity: 0.6 });

  // Scene 1: Hero (0–7s)
  const s1_title = t.hero("s1_title", "Product Name", {
    x: 160, y: 340, start: 0, end: 7000,
    animIn: ["blurIn", 1200], animOut: ["blurOut", 700],
    kf: { scale: { dur: 7000, amp: 0.02 } },
  });
  const s1_div = makeShape("s1_div", "rect", t.ACCENT, {
    x: 760, y: 510, w: 400, h: 3, start: 500, end: 6500,
    animIn: ["expandIn", 500], animOut: ["fadeOut", 300],
  });
  const s1_sub = t.subtitle("s1_sub", "Tagline goes here", {
    x: 260, y: 540, start: 700, end: 6500,
    animIn: ["fadeIn", 800], animOut: ["fadeOut", 500],
  });

  const elements = [g_dot, g_vig, s1_title, s1_div, s1_sub];

  return buildCanvas({
    bg: t.BG, maxTime: MAX,
    fontAssets: {
      ...t.fonts,
      // Add extra fonts (e.g. CJK):
      "Noto Sans SC": { url: "skill/assets/fonts/NotoSansSC-Variable.ttf", fileType: "ttf" },
    },
    elements, tracks: autoTracks(elements),
    fps: 30, quality: "medium",
  });
}
```

## Themes

24 built-in themes — each provides `t.BG`, `t.PRIMARY`, `t.SECONDARY`, `t.ACCENT`, `t.SUCCESS`, a type scale, bundled fonts, and 11 role helpers.

```js
const t = theme("sunset");                        // named theme
const t = theme("ocean", { ACCENT: "#0d9488" });  // with color override
```

| Theme | Accent | Best For | | Theme | Accent | Best For |
| ----- | ------ | -------- | - | ----- | ------ | -------- |
| `cyberpunk` | purple | Tech, SaaS | | `neon` | magenta | Nightclub, music |
| `cinematic` | blue | Apple-style | | `sunset` | orange | Travel, lifestyle |
| `gradient` | lavender | Creative | | `tech` | green | Hacker, terminal |
| `retro` | orange | Gaming | | `slate` | gray | Industrial, B2B |
| `midnight` | indigo | Startups | | `noir` | white | Film noir |
| `ember` | red | Sales, food | | `electric` | blue | Sports, esports |
| `ocean` | sky blue | Corporate | | `vintage` | sepia | Nostalgia |
| `forest` | green | Health, eco | | `professional` | blue | Business (light) |
| `gold` | amber | Luxury | | `minimal` | black | Clean (light) |
| `aurora` | cyan | Science | | `warm` | orange | Food, craft (light) |
| `coral` | rose | Fashion | | `pastel` | purple | Education (light) |
| `monochrome` | white | Editorial | | `candy` | fuchsia | Youth, social |

## Role Helpers

11 pre-styled text helpers — always use these instead of raw `makeText`.

```js
t.hero("id", "Title", { x, y, start, end, animIn: ["blurIn", 1000], ... })
```

| Helper | Size | Weight | Color | Notes |
| ------ | ---- | ------ | ----- | ----- |
| `t.hero` | 120 | 700 | PRIMARY | Main headline |
| `t.display` | 96 | 700 | ACCENT | Large accent title |
| `t.heading` | 64 | 700 | PRIMARY | Section heading |
| `t.subheading` | 48 | 600 | PRIMARY | Sub-section heading |
| `t.subtitle` | 36 | 400 | SECONDARY | Supporting text |
| `t.cta` | 28 | 700 | PRIMARY | Call to action |
| `t.quote` | 28 | 400 | SECONDARY | Playfair Display |
| `t.body` | 24 | 400 | SECONDARY | Body copy |
| `t.code` | 20 | 400 | SECONDARY | Fira Code monospace |
| `t.label` | 18 | 400 | SECONDARY | Labels |
| `t.eyebrow` | 14 | 700 | ACCENT | Category tag above headline |

## Inline Animations & Keyframes

Attach animations directly on any element — no separate animation objects needed.

```js
t.heading("id", "Title", {
  x: 160, y: 300, start: 0, end: 8000,
  animIn:   ["blurIn",  1000],          // entrance
  animOut:  ["blurOut",  600],           // exit
  animLoop: ["glow",    3000],           // looping effect
  kf: { scale: { dur: 8000, amp: 0.02 } },  // subtle breathe keyframe
})
```

| Group | Available Types |
| ----- | --------------- |
| `animIn` (22) | `fadeIn` · `slideIn` · `zoomIn` · `bounceIn` · `blurIn` · `expandIn` · `foldIn` · `curtainIn` · `irisIn` · `pixelateIn` · `elasticIn` · `spiralIn` · `morphIn` · `waveIn` · `dropIn` · `scatterIn` · `rotateInByCharacter` · `flipInByCharacter` · `elasticInByCharacter` · `shakeInByCharacter` · `rotateIn` · `flipIn` |
| `animOut` (22) | `fadeOut` · `slideOut` · `zoomOut` · `bounceOut` · `blurOut` · `collapseOut` · `foldOut` · `curtainOut` · `irisOut` · `pixelateOut` · `spiralOut` · `dissolveOut` · `morphOut` · `waveOut` · `dropOut` · `scatterOut` · `rotateOutByCharacter` · `flipOutByCharacter` · `elasticOutByCharacter` · `shakeOutByCharacter` · `rotateOut` · `flipOut` |
| `animLoop` (17) | `breathe` · `rotate` · `bounce` · `shake` · `flash` · `zoom` · `pulse` · `swing` · `wobble` · `heartbeat` · `rubberBand` · `jello` · `tada` · `glow` · `glitch` · `float` · `headShake` |

**Easing:** `easeIn`, `easeOut`, `easeInOut`, `easeInBounce`, `easeOutBounce`, `easeInElastic`, `easeOutElastic`, `linear`, `"spring:180,12,1"`, `"cubicBezier:0.4,0,0.2,1"`

**Keyframe presets:** `scale` (amp=±scaleXY) · `opacity` (amp=±opacity) · `position` (dx, dy)

## SVG Helpers

65 built-in SVG decorative elements — backgrounds, grids, particles, and UI components.

```js
svgVignette("vig", { start, end, opacity: 0.6 })
svgGradientOrb("orb", { x, y, w, h, start, end, color: t.ACCENT, opacity: 0.15 })
svgDotGrid("grid", { start, end, opacity: 0.05, color: t.ACCENT })
svgParticles("fx", { start, end, count: 40, color: t.ACCENT })
```

| Category | Helpers |
| -------- | ------- |
| Background | `svgVignette`, `svgGradientOrb`, `svgDotGrid`, `svgHexGrid`, `svgCircuitBoard`, `svgNoiseField` |
| Particles | `svgParticles`, `svgStarField`, `svgConfetti`, `svgFireworks` |
| UI/Charts | `svgBarChart`, `svgLineChart`, `svgPieChart`, `svgProgressBar`, `svgCheckMark`, `svgNumberCounter` |
| Decorative | `svgWaveform`, `svgDnaHelix`, `svgGlowRing`, `svgGeometry`, `svgCodeBlock`, ... |

See `skill/references/svg-helpers.md` for all 65 helpers with full params.

## Bundled Fonts

18 fonts shipped in `skill/assets/fonts/`. System fonts (`Arial`, `Georgia`, `Verdana`, `Courier New`) need no registration.

| Font | Best For |
| ---- | -------- |
| Montserrat | Headings, modern brands |
| Playfair Display | Elegant, luxury |
| Fira Code | Code, tech labels |
| Noto Sans SC | Chinese / Japanese |
| Poppins | Clean, SaaS |
| Bebas Neue | Headlines, impact |
| Dancing Script | Creative, invitations |
| EB Garamond | Quotes, editorial |

Full list and pairings: `skill/references/font-assets.md`

## Transitions

Blend between two adjacent elements on the same track.

| Category | Types |
| -------- | ----- |
| Basic | `crossfade`, `dissolve`, `fadeToBlack`, `fadeToWhite` |
| Wipe | `wipeLeft`, `wipeRight`, `wipeUp`, `wipeDown`, `radialWipe` |
| Slide | `slideLeft`, `slideRight`, `slideUp`, `slideDown` |
| Creative | `irisOpen`, `irisClose`, `curtainOpen`, `curtainClose`, `pixelate`, `blur`, `zoomIn`, `zoomOut`, `glitch` |

## Visual Effects

50+ post-processing effects applied to the entire canvas.

| Category | Effect Types |
| -------- | ------------ |
| Pixel Math | `invert`, `duotone`, `colorShift`, `posterize`, `thermal` |
| Convolution | `sharpen`, `emboss` |
| Glitch | `rgbSplit`, `glitchBlock`, `shake` |
| Spatial | `mirror`, `split`, `pixelate` |
| Overlay | `flash`, `spotlight` |
| Temporal | `echo` |
| Text-based | `ascii` |

Common presets: Glitch (`rgbSplit` + `glitchBlock` + `shake`) · Retro (`colorShift` + `echo` + `posterize`) · Dream (`lightLeak` + `sparkle`)

## Captions

Timed subtitles with optional word-level karaoke support.

```json
{
  "id": "cap_001",
  "startTime": "00:00:01.000",
  "endTime": "00:00:04.500",
  "text": "Welcome to the video",
  "wordTimings": [
    { "word": "Welcome", "start": 1.0, "end": 1.4 },
    { "word": "to",      "start": 1.4, "end": 1.5 },
    { "word": "the",     "start": 1.5, "end": 1.6 },
    { "word": "video",   "start": 1.6, "end": 2.0 }
  ]
}
```

Caption presets: `none`, `fadeWord`, `karaoke`, `typewriter`, `slideUp`, `popIn`, `bounceIn`, `glowIn`, `blurIn`, `skew-in`, `tiktok`

> `startTime`/`endTime` use SRT format (`"HH:MM:SS.mmm"`); `wordTimings` use seconds (float).

## CLI Usage

```bash
# Basic render
npx hypr-video-cli input.json -o output.mp4

# Custom frame rate and quality
npx hypr-video-cli input.json -o out.mp4 --fps 60 --quality high

# Override output resolution
npx hypr-video-cli input.json -o out.mp4 --width 1280 --height 720

# Quiet mode — prints only output path (useful for scripting)
npx hypr-video-cli input.json -q
```

### CLI Options

| Option                | Default                   | Description                                                                  |
| --------------------- | ------------------------- | ---------------------------------------------------------------------------- |
| `-o, --output <path>` | `./output/video-<ts>.mp4` | Output file path                                                             |
| `--fps <n>`           | `30`                      | Frame rate (`24` / `30` / `60`)                                              |
| `--quality <level>`   | `medium`                  | `low` (2 Mbps) / `medium` (4 Mbps) / `high` (8 Mbps) / `very_high` (15 Mbps) |
| `--format <fmt>`      | `mp4`                     | `mp4` (H.264) / `mov` / `mp3` (audio only)                                   |
| `--width <n>`         | from JSON                 | Override output width                                                        |
| `--height <n>`        | from JSON                 | Override output height                                                       |
| `-q, --quiet`         | `false`                   | Only print output path                                                       |

## Examples

| Template | File | Canvas | Duration | Description |
| -------- | ---- | ------ | -------- | ----------- |
| Hello World | `hello-world.mjs` | 1920×1080 | 5s | Minimal text with fade-in |
| Apple Style Promo | `apple-style-promo.mjs` | 1920×1080 | 15s | Minimalist brand promo |
| SaaS Promo | `saas-promo.mjs` | 1920×1080 | 20s | Feature highlights + CTA |
| Product Launch | `product-launch.mjs` | 1920×1080 | 25s | Feature specs + pricing |
| Instagram Story | `instagram-story-9x16.mjs` | 1080×1920 | 15s | Vertical 9:16 sale promo |
| Instagram Square | `instagram-square-1x1.mjs` | 1080×1080 | 12s | 1:1 quote + design tip |
| Event Announcement | `event-announcement.mjs` | 1920×1080 | 20s | Conference with speakers |
| Flash Sale | `sale-countdown.mjs` | 1920×1080 | 15s | E-commerce countdown |
| Python Tutorial | `python-decorator-tutorial.mjs` | 1920×1080 | 30s | Code walkthrough |
| SaaS Features | `saas-features-showcase.mjs` | 1920×1080 | 25s | Feature cards showcase |
| Bar Chart Demo | `chart-bar-demo.mjs` | 1920×1080 | 10s | Animated data visualization |

```bash
# Render any example (from cloned repo)
node scripts/gen_canvas.mjs examples/product-launch.mjs /tmp/product-launch.json
npx hypr-video-cli /tmp/product-launch.json -o output/product-launch.mp4
```

## Common Gotchas

| # | Mistake | Symptom | Fix |
| - | ------- | ------- | --- |
| 1 | Missing `isVisible: true` on tracks | Video renders black | `autoTracks()` handles this automatically |
| 2 | `t.fonts` spread as array | Runtime error | `t.fonts` is an object — use `{ ...t.fonts }` not `[...t.fonts]` |
| 3 | `maxTime` < element end times | Elements cut off early | Set `maxTime` >= largest element `end` |
| 4 | Per-character anim + `\n` + centered text | Horizontal misalignment | Per-char anims safe on single-line text only |
| 5 | Position keyframe `{x,y}` mismatch | Element jumps on frame 1 | Initial keyframe must match element `x`/`y` exactly |
| 6 | Wrong time units | Elements flash or don't appear | `start`/`end`/animations = ms; captions = SRT; `wordTimings` = seconds |
| 7 | Non-adjacent transition elements | Transition doesn't render | Source and target must be adjacent on the same track |
| 8 | Config file written to `examples/` | Clutters repo | Config and JSON always go in `/tmp/` |

## Common Canvas Sizes

| Name | Width | Height | Use Case |
| ---- | ----- | ------ | -------- |
| 1080p Landscape | 1920 | 1080 | YouTube, general video |
| 720p Landscape | 1280 | 720 | Smaller file size |
| 9:16 Portrait | 1080 | 1920 | TikTok, Reels, Shorts |
| 1:1 Square | 1080 | 1080 | Instagram feed |
| 4:3 Standard | 1440 | 1080 | Presentations |

## Project Structure

```
hypr-video-cli/
├── assets/                     # Demo video and preview GIF
├── bin/                        # Entry script shim
├── dist/
│   ├── render-video.mjs        # Bundled CLI renderer (DO NOT EDIT)
│   └── frameWorker.mjs         # Frame rendering worker
├── examples/                   # Ready-to-run .mjs config templates
├── skill/
│   ├── SKILL.md                # Claude Code skill definition + workflow
│   ├── scripts/
│   │   └── gen_canvas.mjs      # Core config-to-JSON engine (1185 lines)
│   ├── assets/
│   │   ├── fonts/              # 18 bundled TTF fonts
│   │   └── templates/          # Golden templates (minimal.mjs, saas-promo.mjs)
│   └── references/             # Feature docs Claude reads for accurate generation
│       ├── gen-canvas.md       # Config spec: themes, role helpers, SVG helpers
│       ├── design-rules.md     # Mandatory design rules
│       ├── svg-helpers.md      # Params for all 65 SVG helpers
│       ├── font-assets.md      # 18 fonts + pairings
│       ├── common-mistakes.md  # Debugging guide
│       ├── scene-planning.md   # Video types + scene structures
│       └── icons.md            # Unicode symbols + emoji
└── package.json
```

## Development

```bash
git clone https://github.com/superyhee/hypr-video-cli.git
cd hypr-video-cli
npm install

# Write a config and generate JSON
node skill/scripts/gen_canvas.mjs examples/hello-world.mjs /tmp/hello.json

# Render
node dist/render-video.mjs /tmp/hello.json -o output/hello.mp4
```

## Troubleshooting

- **`FFmpeg not found`** — Install FFmpeg and ensure it's in PATH (`brew install ffmpeg` on macOS)
- **`skia-canvas` or `sharp` install fails** — These are native binaries. Ensure Node.js >= 20 and matching platform. Try `npm rebuild`.
- **Blank video output** — Most likely `isVisible: true` is missing on tracks. Use `autoTracks()` to avoid this.
- **Elements cut off early** — Check that `maxTime` >= the largest element `end`.
- **`gen_canvas.mjs` not found** — Run from the repo root: `node skill/scripts/gen_canvas.mjs` (not `scripts/`)

## License

MIT
