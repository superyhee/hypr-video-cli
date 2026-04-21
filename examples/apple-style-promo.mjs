export default function build(h) {
  const { buildCanvas, makeText, makeTrack, makeAnim } = h;

  const elements = [
    makeText("el_brand", "Your Brand", {
      x: 210,
      y: 420,
      w: 1500,
      h: 160,
      start: 500,
      end: 5000,
      name: "Brand",
      size: 144,
      weight: 700,
      color: "#ffffff",
      align: "center",
    }),
    makeText("el_tagline1", "Think different.", {
      x: 260,
      y: 420,
      w: 1400,
      h: 80,
      start: 5000,
      end: 10000,
      name: "Tagline Bold",
      size: 72,
      weight: 600,
      color: "#ffffff",
      align: "center",
    }),
    makeText("el_tagline2", "Create beautifully.", {
      x: 260,
      y: 520,
      w: 1400,
      h: 80,
      start: 6000,
      end: 10000,
      name: "Tagline Light",
      size: 72,
      weight: 300,
      color: "#86868b",
      align: "center",
    }),
    makeText("el_cta", "Learn more", {
      x: 460,
      y: 460,
      w: 1000,
      h: 80,
      start: 10000,
      end: 15000,
      name: "CTA",
      size: 48,
      color: "#2997ff",
      align: "center",
    }),
    makeText("el_url", "yourbrand.com", {
      x: 560,
      y: 560,
      w: 800,
      h: 40,
      start: 11000,
      end: 15000,
      opacity: 0.5,
      name: "URL",
      size: 28,
      color: "#86868b",
      align: "center",
    }),
  ];

  const tracks = [
    makeTrack("t_1", "Text", "text", ["el_brand","el_tagline1","el_tagline2","el_cta","el_url"]),
  ];

  const animations = [
    makeAnim("a_1", "el_brand", "fadeIn", 1500, "in", {"easing":"easeOut"}),
    makeAnim("a_2", "el_brand", "fadeOut", 800, "out", {"easing":"easeIn"}),
    makeAnim("a_3", "el_tagline1", "fadeIn", 1200, "in", {"easing":"easeOut"}),
    makeAnim("a_4", "el_tagline1", "fadeOut", 800, "out", {"easing":"easeIn"}),
    makeAnim("a_5", "el_tagline2", "fadeIn", 1200, "in", {"easing":"easeOut"}),
    makeAnim("a_6", "el_tagline2", "fadeOut", 800, "out", {"easing":"easeIn"}),
    makeAnim("a_7", "el_cta", "fadeIn", 1000, "in", {"easing":"easeOut"}),
    makeAnim("a_8", "el_url", "fadeIn", 1000, "in", {"easing":"easeOut"}),
  ];

  return buildCanvas({
    bg: "#000000",
    maxTime: 15000,
    elements,
    tracks,
    animations,
    quality: "high",
  });
}
