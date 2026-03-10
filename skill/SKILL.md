---
name: hypr-video-cli
description: >
  A Claude Code Skill for creating programmatic videos with CLI.
  Generate canvasState JSON and render videos locally using hypr-video-cli.
  Use when: (1) creating a video from text/natural language description, (2) composing video/image/text/shape elements into a rendered video,
  (3) building canvasState JSON, (4) rendering video via CLI (npx hypr-video-cli),
  (5) generating video with animations, transitions, captions, keyframes, or visual effects.
  Do NOT use for frontend UI changes, MobX store, or code editing.
---

# hypr-video-cli

A Claude Code Skill for creating programmatic videos with CLI. Describe what you want in natural language, and this skill enables Claude to build the JSON and render it to MP4 — no manual editing needed. Published on npm.

## Core Workflow

1. Build canvasState JSON from user requirements
2. Save JSON to a file
3. Validate: `npx tsx scripts/validate-canvas-state.ts input.json`
4. Render: `npx hypr-video-cli input.json -o output.mp4`

See [cli-usage.md](references/cli-usage.md) for full CLI options.

## Setup

```bash
# No install needed — run directly via npx
npx hypr-video-cli input.json -o output.mp4

# Or install globally
npm install -g hypr-video-cli
```

Prerequisites: Node.js >= 20, FFmpeg.

## canvasState Structure

Read the linked reference when building that part:

| Part                                                  | Reference                                           | When to read                                                |
| ----------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------- |
| Top-level fields (width, height, background, maxTime) | [canvas-state.md](references/canvas-state.md)       | Always                                                      |
| Elements (video, image, text, shape, audio)           | [elements.md](references/elements.md)               | Always                                                      |
| Tracks (grouping + visibility)                        | [tracks.md](references/tracks.md)                   | Always                                                      |
| Animations (fadeIn, slideIn, breathe, etc.)           | [animations.md](references/animations.md)           | When elements need entrance/exit/loop effects               |
| Transitions (crossfade, wipe, dissolve between clips) | [transitions.md](references/transitions.md)         | When adjacent clips need blend effects                      |
| Captions & subtitle styling                           | [captions.md](references/captions.md)               | When video has subtitles or karaoke text                    |
| Keyframe tracks (animate properties over time)        | [keyframes.md](references/keyframes.md)             | When properties change over time (opacity, position, scale) |
| Visual effects (blur, glow, glitch, particles, etc.)  | [effects.md](references/effects.md)                 | When adding post-processing effects to the video            |
| Common mistakes & gotchas                             | [common-mistakes.md](references/common-mistakes.md) | **Always read before first use**                            |

## Quick Example

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
        "placement": {
          "x": 260,
          "y": 440,
          "width": 1400,
          "height": 200,
          "rotation": 0,
          "scaleX": 1,
          "scaleY": 1
        },
        "properties": {
          "text": "Hello World",
          "fontFamily": "Arial",
          "fontSize": 96,
          "fontWeight": 700,
          "fontColor": "#ffffff",
          "textAlign": "center"
        }
      }
    ],
    "tracks": [
      {
        "id": "t_1",
        "name": "Text",
        "type": "text",
        "elementIds": ["el_1"],
        "isVisible": true
      }
    ],
    "animations": [
      {
        "id": "a_1",
        "targetId": "el_1",
        "type": "fadeIn",
        "duration": 800,
        "group": "in",
        "easing": "easeOut",
        "properties": {}
      }
    ],
    "captions": [],
    "globalCaptionStyle": {
      "fontSize": 36,
      "fontFamily": "Arial",
      "fontColor": "#ffffff",
      "fontWeight": 700,
      "textAlign": "center",
      "lineHeight": 1.2,
      "charSpacing": 0,
      "styles": [],
      "strokeWidth": 0,
      "strokeColor": "#000000",
      "shadowColor": "",
      "shadowBlur": 0,
      "shadowOffsetX": 0,
      "shadowOffsetY": 0,
      "backgroundColor": ""
    },
    "keyframeTracks": [],
    "transitions": []
  },
  "outputFormat": { "fps": 30, "quality": "medium", "format": "mp4" }
}
```

```bash
npx hypr-video-cli input.json -o output.mp4
```

## Validation

Run the validator before rendering (catches common mistakes without the full renderer):

```bash
npx tsx validate-canvas-state.ts input.json
```

Checks: isVisible, opacity placement, maxTime, element references, animation targets, duplicate IDs, outputFormat fields.
