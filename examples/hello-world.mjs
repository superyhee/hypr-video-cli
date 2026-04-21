export default function build(h) {
  const { buildCanvas, makeText, makeTrack, makeAnim } = h;

  const elements = [
    makeText("el_title", "Hello World", {
      x: 260,
      y: 400,
      w: 1400,
      h: 200,
      start: 0,
      end: 5000,
      name: "Title",
      size: 120,
      weight: 700,
      color: "#ffffff",
      align: "center",
    }),
    makeText("el_sub", "Rendered with hypr-video-cli", {
      x: 460,
      y: 600,
      w: 1000,
      h: 60,
      start: 1000,
      end: 5000,
      opacity: 0.6,
      name: "Subtitle",
      size: 32,
      color: "#888888",
      align: "center",
    }),
  ];

  const tracks = [
    makeTrack("t_1", "Text", "text", ["el_title","el_sub"]),
  ];

  const animations = [
    makeAnim("a_1", "el_title", "fadeIn", 1000, "in", {"easing":"easeOut"}),
    makeAnim("a_2", "el_sub", "fadeIn", 800, "in", {"easing":"easeOut"}),
  ];

  return buildCanvas({
    bg: "#000000",
    maxTime: 5000,
    elements,
    tracks,
    animations,
  });
}
