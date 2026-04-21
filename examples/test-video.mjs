export default function build(h) {
  const { buildCanvas, makeText, makeTrack, makeAnim } = h;

  const elements = [
    makeText("el_title", "测试视频", {
      x: 160,
      y: 400,
      w: 1600,
      h: 160,
      start: 0,
      end: 5000,
      name: "Title",
      size: 120,
      weight: 700,
      color: "#ffffff",
      align: "center",
    }),
    makeText("el_subtitle", "hypr-video-cli · 2026", {
      x: 160,
      y: 590,
      w: 1600,
      h: 80,
      start: 500,
      end: 5000,
      name: "Subtitle",
      size: 48,
      color: "#a0c4ff",
      align: "center",
    }),
  ];

  const tracks = [
    makeTrack("t_title", "Title Track", "text", ["el_title"]),
    makeTrack("t_subtitle", "Subtitle Track", "text", ["el_subtitle"]),
  ];

  const animations = [
    makeAnim("a_title_in", "el_title", "fadeIn", 800, "in", {"easing":"easeOut"}),
    makeAnim("a_subtitle_in", "el_subtitle", "slideIn", 600, "in", {"easing":"easeOut"}),
  ];

  return buildCanvas({
    bg: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    maxTime: 5000,
    elements,
    tracks,
    animations,
  });
}
