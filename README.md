# hypr-video-cli

CLI tool to render videos from JSON — powered by Fabric Video Editor's server-side rendering engine.

Describe your video as structured JSON (text, shapes, animations, transitions, captions, keyframes), and the CLI renders it to MP4 using skia-canvas + FFmpeg.

## Quick Start

```bash
# Install
git clone https://github.com/YOUR_USERNAME/hypr-video-cli.git
cd hypr-video-cli
npm install

# Render
node dist/render-video.mjs examples/hello-world.json -o output.mp4
```

**Prerequisites:** Node.js >= 20, FFmpeg installed and in PATH.

## Usage

```bash
# Basic
node dist/render-video.mjs input.json -o output.mp4

# With options
node dist/render-video.mjs input.json -o out.mp4 --fps 60 --quality high

# Quiet mode (prints only output path, for scripting)
node dist/render-video.mjs input.json -q

# Validate JSON before rendering
npx tsx scripts/validate-canvas-state.ts input.json
```

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-o, --output <path>` | `./output/video-<ts>.mp4` | Output file path |
| `--fps <n>` | 30 | Frame rate (24/30/60) |
| `--quality <level>` | medium | `low` / `medium` / `high` / `very_high` |
| `--format <fmt>` | mp4 | `mp4` / `mov` / `mp3` |
| `--width <n>` | from JSON | Override output width |
| `--height <n>` | from JSON | Override output height |
| `-q, --quiet` | false | Only print output path |

## Input JSON Format

```json
{
  "canvasState": {
    "width": 1920,
    "height": 1080,
    "backgroundColor": "#000000",
    "maxTime": 5000,
    "elements": [
      {
        "id": "el_1",
        "type": "text",
        "name": "Title",
        "timeFrame": { "start": 0, "end": 5000 },
        "placement": { "x": 260, "y": 440, "width": 1400, "height": 200, "rotation": 0, "scaleX": 1, "scaleY": 1 },
        "properties": { "text": "Hello World", "fontFamily": "Arial", "fontSize": 96, "fontWeight": 700, "fontColor": "#ffffff", "textAlign": "center" }
      }
    ],
    "tracks": [
      { "id": "t_1", "name": "Text", "type": "text", "elementIds": ["el_1"], "isVisible": true }
    ],
    "animations": [
      { "id": "a_1", "targetId": "el_1", "type": "fadeIn", "duration": 800, "group": "in", "easing": "easeOut", "properties": {} }
    ],
    "captions": [],
    "globalCaptionStyle": { "fontSize": 36, "fontFamily": "Arial", "fontColor": "#ffffff", "fontWeight": 700, "textAlign": "center", "lineHeight": 1.2, "charSpacing": 0, "styles": [], "strokeWidth": 0, "strokeColor": "#000000", "shadowColor": "", "shadowBlur": 0, "shadowOffsetX": 0, "shadowOffsetY": 0, "backgroundColor": "" },
    "keyframeTracks": [],
    "transitions": []
  },
  "outputFormat": { "fps": 30, "quality": "medium", "format": "mp4" }
}
```

## Examples

| Template | File | Canvas | Duration | Description |
|----------|------|--------|----------|-------------|
| Hello World | `hello-world.json` | 1920x1080 | 5s | Minimal text with fade-in |
| Apple Style | `apple-style-promo.json` | 1920x1080 | 15s | Minimalist brand promo (black + white + blue) |
| Tutorial Intro | `tutorial-intro.json` | 1920x1080 | 20s | Step-by-step numbered slides |
| Product Launch | `product-launch.json` | 1920x1080 | 25s | Feature specs + pricing + CTA |
| Instagram Story | `instagram-story-9x16.json` | 1080x1920 | 15s | Vertical 9:16 sale promo |
| Instagram Square | `instagram-square-1x1.json` | 1080x1080 | 12s | 1:1 quote + design tip carousel |
| Event Announcement | `event-announcement.json` | 1920x1080 | 20s | Conference with speakers list |
| Flash Sale | `sale-countdown.json` | 1920x1080 | 15s | E-commerce 70% off countdown |

```bash
# Render any example
node dist/render-video.mjs examples/product-launch.json -o product.mp4
```

## Element Types

| Type | Key Properties |
|------|---------------|
| `text` | `text`, `fontFamily`, `fontSize`, `fontWeight`, `fontColor`, `textAlign` |
| `video` | `src` (URL), `volume`, `playbackRate` |
| `image` | `src` (URL) |
| `shape` | `shapeType` (rect/circle/triangle), `fill`, `stroke` |
| `audio` | `src` (URL), `volume` |

## Features

- **Animations** — fadeIn/Out, slideIn/Out, zoomIn/Out, bounce, breathe, rotate, shake, pulse, and more
- **Transitions** — crossfade, wipe, slide, iris, dissolve, blur, glitch between clips
- **Captions** — timed subtitles with word-level karaoke support
- **Keyframes** — animate position, scale, rotation, opacity over time
- **Visual effects** — 50+ effect types (blur, glow, glitch, film grain, etc.)

## Claude Code Skill

This project includes a Claude Code skill for AI-assisted video generation. Install it to let Claude build canvasState JSON and render videos from natural language descriptions.

```bash
# In Claude Code
/install /path/to/hypr-video-cli/skill
```

## Common Gotchas

1. **Text uses `fontColor`, NOT `fill`** — `fill` is for shapes only. Text with `fill` renders as black-on-black
2. **Tracks must have `"isVisible": true`** — defaults to `false` if omitted (invisible track!)
3. **`opacity` is a top-level element field** — NOT inside `placement`
4. **`maxTime` must >= latest element end** — otherwise elements get cut off
5. **Use the validator** — `npx tsx scripts/validate-canvas-state.ts input.json` catches all of these

## License

MIT
