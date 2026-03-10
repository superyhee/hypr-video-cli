---
name: hypr-video-cli
description: >
  Create programmatic videos from JSON via CLI. Generate canvasState JSON and render to MP4 locally.
  Use when: (1) user asks to make, create, or generate a video, promo, clip, or animation from a description,
  (2) composing video/image/text/shape elements into a rendered video,
  (3) building or editing canvasState JSON for video rendering,
  (4) rendering video via CLI (npx hypr-video-cli),
  (5) generating video with animations, transitions, captions, keyframes, or visual effects.
  Triggers on: "make me a video", "create a promo clip", "render an MP4", "product launch video",
  "social media video", "tutorial intro", "animated text", "video from this description".
  Do NOT use for frontend UI changes, MobX store, or code editing.
---

# hypr-video-cli

## Workflow

1. Read relevant references below, then build canvasState JSON
2. Save JSON to `/tmp/video-<name>.json`
3. Validate: `npx tsx scripts/validate-canvas-state.ts /tmp/video-<name>.json`
4. Render: `npx hypr-video-cli /tmp/video-<name>.json -o ./output/<name>.mp4`
5. On failure: check error output, fix JSON, re-validate, re-render

CLI options: `--fps 24|30|60`, `--quality low|medium|high|very_high`, `--format mp4|mov|mp3`, `--width N`, `--height N`, `-q` (quiet mode). CLI options override JSON values.

Prerequisites: Node.js >= 20, FFmpeg.

## Critical Rules

Violating these produces blank or broken output:

1. **Tracks: `"isVisible": true` required** — defaults to `false` if omitted, entire track invisible
2. **`opacity` is top-level on element, NOT inside `placement`** — `placement.opacity` silently ignored
3. **Text uses `fontColor`, NOT `fill`** — `fill` is shapes only; missing `fontColor` defaults to `#000000`
4. **`maxTime` >= largest `timeFrame.end`** — elements cut off otherwise
5. **Every track needs `"name"`** — omitting causes rendering errors
6. **Time units:** `timeFrame`/animations/transitions = ms; captions = SRT `"HH:MM:SS.mmm"`; `wordTimings` = seconds (float); keyframe `time` = ms relative to element start
7. **Transitions require adjacent elements on same track** — cross-track transitions fail
8. **Track layer order: first track = topmost layer** — `tracks[0]` renders on top, last track is the bottom layer. Put text/overlays in earlier tracks, background shapes in later tracks to avoid elements being occluded
9. **Use safe fonts** — system fonts only (Arial, Georgia, Times New Roman, Courier New, Verdana). For custom fonts, register via `fontAssets` in canvasState

See [common-mistakes.md](references/common-mistakes.md) for detailed explanations with code examples.

## References

Read the linked file when building that part of canvasState:

| Part | Reference | When to read |
|------|-----------|--------------|
| Top-level fields, canvas sizes, outputFormat | [canvas-state.md](references/canvas-state.md) | Always |
| Elements + Tracks (types, structure, layer order) | [elements.md](references/elements.md) | Always |
| Animations (fadeIn, slideIn, breathe, etc.) | [animations.md](references/animations.md) | When adding entrance/exit/loop effects |
| Transitions (crossfade, wipe, dissolve) | [transitions.md](references/transitions.md) | When blending between adjacent clips |
| Captions & globalCaptionStyle template | [captions.md](references/captions.md) | When adding subtitles or karaoke |
| Keyframe tracks | [keyframes.md](references/keyframes.md) | When animating properties over time |
| Visual effects (50+ types) | [effects.md](references/effects.md) | When adding post-processing effects |

## Minimal Example

```json
{
  "canvasState": {
    "width": 1920, "height": 1080, "backgroundColor": "#000000", "maxTime": 5000,
    "elements": [
      { "id": "el_title", "type": "text", "name": "Title", "timeFrame": { "start": 0, "end": 5000 },
        "placement": { "x": 260, "y": 400, "width": 1400, "height": 200, "rotation": 0, "scaleX": 1, "scaleY": 1 },
        "properties": { "text": "Hello World", "fontFamily": "Arial", "fontSize": 96, "fontWeight": 700, "fontColor": "#ffffff", "textAlign": "center" } },
      { "id": "el_bg", "type": "shape", "name": "Background", "timeFrame": { "start": 0, "end": 5000 },
        "placement": { "x": 0, "y": 0, "width": 1920, "height": 1080, "rotation": 0, "scaleX": 1, "scaleY": 1 },
        "properties": { "shapeType": "rect", "fill": "#1a1a2e" } }
    ],
    "tracks": [
      { "id": "t_text", "name": "Text", "type": "text", "elementIds": ["el_title"], "isVisible": true },
      { "id": "t_bg", "name": "Background", "type": "shape", "elementIds": ["el_bg"], "isVisible": true }
    ],
    "animations": [{ "id": "a_1", "targetId": "el_title", "type": "fadeIn", "duration": 800, "group": "in", "easing": "easeOut", "properties": {} }],
    "captions": [],
    "globalCaptionStyle": { "fontSize": 36, "fontFamily": "Arial", "fontColor": "#ffffff", "fontWeight": 700, "textAlign": "center", "lineHeight": 1.2, "charSpacing": 0, "styles": [], "strokeWidth": 0, "strokeColor": "#000000", "shadowColor": "", "shadowBlur": 0, "shadowOffsetX": 0, "shadowOffsetY": 0, "backgroundColor": "" }
  },
  "outputFormat": { "fps": 30, "quality": "medium", "format": "mp4" }
}
```

## Example Templates

9 templates in `examples/` for structural reference:

- `hello-world.json` — Minimal text + fade-in (start here)
- `product-launch.json` — Features + pricing + CTA (25s)
- `apple-style-promo.json` — Minimalist brand promo (15s)
- `tutorial-intro.json` — Step-by-step slides (20s)
- `instagram-story-9x16.json` — Vertical 9:16 (15s)
- `instagram-square-1x1.json` — Square 1:1 (12s)
- `event-announcement.json` — Conference + speakers (20s)
- `sale-countdown.json` — E-commerce countdown (15s)
- `cinematic-effects.json` — Vignette + grain + glow effects
