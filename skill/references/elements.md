# Elements

> **Contents:** [Restrictions](#restrictions) | [Base Structure](#base-structure) | [Element Types](#element-types) (text, video, image, shape, audio, effect) | [Tracks](#tracks) | [src Formats](#src-formats) | [ID Convention](#id-convention)

Every visual or audio item in the video is an element. Elements are placed on the canvas with position, size, and time range.

## Restrictions

- Every element **MUST** have a unique `id`
- `opacity` is a **top-level** field on the element, **NOT** inside `placement`
- `timeFrame.start` and `timeFrame.end` are in **milliseconds**
- `placement` coordinates are in the **canvas coordinate space** (not normalized)

## Base Structure

```json
{
  "id": "el_abc123",
  "type": "text",
  "name": "Title",
  "opacity": 1,
  "timeFrame": { "start": 0, "end": 5000 },
  "placement": { "x": 100, "y": 200, "width": 800, "height": 100, "rotation": 0, "scaleX": 1, "scaleY": 1 },
  "properties": { ... }
}
```

| Field             | Type   | Required | Notes                                                                     |
| ----------------- | ------ | -------- | ------------------------------------------------------------------------- |
| `id`              | string | yes      | `el_` + random suffix                                                     |
| `type`            | string | yes      | `video` / `audio` / `image` / `text` / `shape` / `gif` / `svg` / `effect` |
| `name`            | string | yes      | Display name                                                              |
| `opacity`         | number | no       | 0–1, default 1. **Top-level only**                                        |
| `blendMode`       | string | no       | `"multiply"` / `"screen"` / `"overlay"` / `"normal"`                      |
| `timeFrame.start` | number | yes      | ms                                                                        |
| `timeFrame.end`   | number | yes      | ms                                                                        |

### placement fields

`x`, `y`, `width`, `height` (px), `rotation` (degrees), `scaleX`, `scaleY` (default 1), `flipX`, `flipY` (boolean, image/video/gif only)

## Shared: border & filters (video and image)

Both `video` and `image` support identical `border` and `filters` objects:

```json
"border": { "width": 4, "color": "#ffffff", "style": "solid", "borderRadius": 12 }
"filters": { "brightness": 0, "contrast": 0, "saturation": 0, "hue": 0, "blur": 0 }
"effect": { "type": "grayscale", "intensity": 1 }
```

- `filters` range: brightness/contrast/saturation −1 to 1, hue −180 to 180, blur px
- `effect.type`: `"grayscale"` / `"sepia"` / `"invert"`

## Element Types

### text

```json
{
  "type": "text",
  "properties": {
    "text": "Hello World",
    "fontFamily": "Arial",
    "fontSize": 48,
    "fontWeight": 700,
    "fontColor": "#ffffff",
    "textAlign": "center",
    "styles": ["bold"],
    "lineHeight": 1.2,
    "charSpacing": 0,
    "backgroundColor": "transparent",
    "strokeColor": "#000000",
    "strokeWidth": 2,
    "shadowColor": "#000000",
    "shadowBlur": 8,
    "shadowOffsetX": 4,
    "shadowOffsetY": 4,
    "useGradient": false,
    "gradientColors": ["#ff0000", "#0000ff"]
  }
}
```

Key notes:

- `fontColor` (NOT `fill`) — missing fontColor defaults to `#000000` (invisible on dark bg)
- `styles`: `"bold"` / `"italic"` / `"underline"` / `"linethrough"`
- `useGradient: true` replaces `fontColor` with top-to-bottom gradient across `gradientColors`
- Safe fonts: `Arial`, `Georgia`, `Verdana`, `Times New Roman`, `Courier New`. Custom fonts → use `fontAssets`.

### video

```json
{
  "type": "video",
  "properties": {
    "src": "https://cdn.example.com/video.mp4",
    "volume": 1,
    "playbackRate": 1,
    "trimStart": 0,
    "trimEnd": 0,
    "border": { ... },
    "filters": { ... },
    "effect": { ... }
  }
}
```

### image

```json
{
  "type": "image",
  "properties": {
    "src": "https://cdn.example.com/photo.jpg",
    "border": { ... },
    "filters": { ... },
    "effect": { ... }
  }
}
```

### shape

```json
{
  "type": "shape",
  "properties": {
    "shapeType": "rect",
    "fill": "#ff0000",
    "stroke": "#000000",
    "strokeWidth": 2,
    "rx": 10,
    "ry": 10
  }
}
```

`shapeType`: `"rect"` / `"circle"` / `"triangle"`. `rx`/`ry`: corner radius (rect only). Use `fill` (NOT `fontColor`).

### audio

```json
{
  "type": "audio",
  "properties": {
    "src": "https://cdn.example.com/music.mp3",
    "volume": 0.5,
    "playbackRate": 1
  }
}
```

No visual placement needed, but `timeFrame` is required.

## Tracks

Tracks group elements into visual layers on the timeline. Every element **MUST** belong to exactly one track.

```json
{
  "id": "track_1",
  "name": "Video",
  "type": "video",
  "elementIds": ["el_a", "el_b"],
  "isVisible": true
}
```

| Field        | Type     | Required | Description                                                           |
| ------------ | -------- | -------- | --------------------------------------------------------------------- |
| `id`         | string   | yes      | Unique track ID                                                       |
| `name`       | string   | yes      | Display name                                                          |
| `type`       | string   | yes      | `video` / `audio` / `text` / `shape` / `image` / `effect` / `caption` |
| `elementIds` | string[] | yes      | Ordered element IDs                                                   |
| `isVisible`  | boolean  | **yes**  | **MUST be `true`** to render                                          |

### Rendering Order

- Elements within a track are **sequential** (ordered by their `timeFrame`)
- Tracks render as **layers** — **first track (`tracks[0]`) is the topmost layer**, last track is the bottom
- Put text/overlays on early tracks (top), background shapes on later tracks (bottom)

### Common Track Pattern

```json
"tracks": [
  { "id": "track_text", "name": "Text", "type": "text", "elementIds": ["el_title", "el_sub"], "isVisible": true },
  { "id": "track_video", "name": "Video", "type": "video", "elementIds": ["el_v1", "el_v2"], "isVisible": true },
  { "id": "track_bg", "name": "Background", "type": "shape", "elementIds": ["el_bg"], "isVisible": true },
  { "id": "track_audio", "name": "Music", "type": "audio", "elementIds": ["el_bgm"], "isVisible": true }
]
```

## src Formats

| Format      | Example                            | Description               |
| ----------- | ---------------------------------- | ------------------------- |
| Remote URL  | `https://cdn.example.com/file.mp4` | Server downloads directly |
| Local media | `local://media_abc123`             |                           |
|             |

## ID Convention

Use short prefix + random suffix:

- Elements: `el_a1b2c3`
- Tracks: `track_x1y2`
- Animations: `anim_m1n2`
- Keyframe tracks: `kf_p1q2`
- Transitions: `trans_r1s2`
- Captions: `cap_t1u2`
