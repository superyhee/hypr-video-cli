# CLI Usage

Render videos locally. Requires Node.js >= 20, FFmpeg, and native deps (skia-canvas, sharp — installed automatically).

## Installation

### Via npx (no install)

```bash
npx hypr-video-cli input.json -o output.mp4
```

### Global install

```bash
npm install -g hypr-video-cli
hypr-video-cli input.json -o output.mp4
```

### From source (development)

```bash
git clone https://github.com/superyhee/hypr-video-cli.git
cd hypr-video-cli && npm install
node dist/render-video.mjs input.json -o output.mp4
```

## Options

| Option                | Default                          | Description                             |
| --------------------- | -------------------------------- | --------------------------------------- |
| `-o, --output <path>` | `./output/video-<timestamp>.mp4` | Output file path                        |
| `--fps <n>`           | 30                               | Frame rate                              |
| `--quality <level>`   | medium                           | `low` / `medium` / `high` / `very_high` |
| `--format <fmt>`      | mp4                              | `mp4` / `mov` / `mp3`                   |
| `--width <n>`         | from JSON                        | Override output width                   |
| `--height <n>`        | from JSON                        | Override output height                  |
| `-q, --quiet`         | false                            | Only print output path (for scripting)  |

CLI options override values in the JSON file.

## Input Formats

**Full payload** (with outputFormat):

```json
{
  "canvasState": { "width": 1920, "height": 1080, ... },
  "outputFormat": { "fps": 30, "quality": "medium", "format": "mp4" },
  "resolution": { "width": 1280, "height": 720 }
}
```

**Bare canvasState** (defaults applied):

```json
{ "width": 1920, "height": 1080, "elements": [...], ... }
```

## Typical Workflow

```bash
# 1. Save canvasState JSON
cat > /tmp/video.json << 'EOF'
{ "canvasState": { ... }, "outputFormat": { "fps": 30, "quality": "medium", "format": "mp4" } }
EOF

# 2. Validate
npx tsx validate-canvas-state.ts /tmp/video.json

# 3. Render
npx hypr-video-cli /tmp/video.json -o /tmp/output.mp4
# [100%] 导出完成
# Done in 3.4s
# Output: /tmp/output.mp4 (0.4 MB)
```

## Quiet Mode for Scripting

```bash
OUTPUT=$(npx hypr-video-cli input.json -q 2>/dev/null)
echo "Video saved to: $OUTPUT"
```
