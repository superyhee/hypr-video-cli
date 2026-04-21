// Artisan Bakery Promo — 30s promotional video
// Palette: Warm/Premium — dark brown bg, cream primary, golden accent
// Fonts: Playfair Display (heading) + Lato (body)

export default function build(h) {
  const {
    scene, buildScenes, captions,
    svgAurora, svgGradientOrb, svgParticles, svgBreathingRing, svgShootingStar,
    svgHexGrid, svgWaveLine, svgLiquidBlob, svgCheckMark,
    svgConcentricRings, svgGlowOrb,
    svgConfetti, svgPulseRipple, svgFireworks, svgBadgeStamp, svgArrowPointer, svgBurstRays,
  } = h;

  const MAX = 30000;
  const colors = {
    BG: "#1a0f0a",
    PRIMARY: "#f5e6d3",
    SECONDARY: "#c9956a",
    ACCENT: "#d4880a",
    SUCCESS: "#a3c97e",
  };
  const fonts = { heading: "Playfair Display", body: "Lato" };

  // ── Scene 1: Hero (0–6500ms) ───────────────────────────────
  const s1 = scene("hero", 0, 6500, (s) => {
    s.svg(svgAurora, "aurora", { opacity: 0.12, colors: ["#8b4513", "#d4880a", "#c9956a"] });
    s.svg(svgGradientOrb, "orb", { x: -100, y: -100, w: 900, h: 900, opacity: 0.12, color: "#d4880a" });
    s.svg(svgParticles, "particles", { opacity: 0.25, colors: ["#f5e6d3", "#d4880a", "#c9956a"] });
    s.svg(svgBreathingRing, "ring", { x: 660, y: 240, w: 600, h: 600, opacity: 0.12, color: "#d4880a" });
    s.svg(svgShootingStar, "star", { x: 200, y: 80, w: 400, h: 200, opacity: 0.4 });

    s.hero("title", "Artisan Bakery", { shadowColor: "#d4880a", shadowBlur: 30 });
    s.shape("line", "rect", "#d4880a", { x: 760, y: 510, w: 400, h: 4, rx: 2, opacity: 0.9 });
    s.subtitle("tagline", "Baked with love, served fresh daily", { color: "#f5e6d3" });
    s.label("desc", "Est. 2018  ·  Downtown", { font: "Lato", opacity: 0.7 });

    s.effect("flash", [
      { effectType: "flash", effectParams: { intensity: 0.4, speed: 2, decay: 0.3 }, enabled: true },
    ], { dur: 1500 });
  }, { colors, fonts });

  // ── Scene 2: Signature Products (6200–14000ms) ─────────────
  const s2 = scene("products", 6200, 14000, (s) => {
    s.svg(svgHexGrid, "hex", { opacity: 0.06, color: "#d4880a" });
    s.svg(svgWaveLine, "wave", { x: 0, y: 880, w: 1920, h: 200, opacity: 0.1, color: "#d4880a" });
    s.svg(svgLiquidBlob, "blob", { x: 1300, y: 50, w: 600, h: 600, opacity: 0.07, color: "#8b4513" });

    s.heading("title", "Our Signature Creations", { y: 60 });
    s.shape("hline", "rect", "#d4880a", { x: 760, y: 155, w: 400, h: 3, rx: 2, opacity: 0.7 });

    const products = [
      { id: "p1", name: "Sourdough Bread", desc: "Stone-milled flour, 48-hour fermentation" },
      { id: "p2", name: "Butter Croissants", desc: "Laminated dough, French butter" },
      { id: "p3", name: "Seasonal Fruit Tarts", desc: "Fresh local fruits, buttery pastry shell" },
      { id: "p4", name: "Custom Celebration Cakes", desc: "Wedding & birthday cakes to order" },
    ];

    products.forEach(({ id, name, desc }, i) => {
      const y = 200 + i * 140;
      s.shape(`${id}_bg`, "rect", "#f5e6d3", { x: 180, y, w: 720, h: 115, opacity: 0.04, rx: 12, inType: "slideIn" });
      s.svg(svgCheckMark, `${id}_ck`, { x: 200, y: y + 20, w: 44, h: 44, color: "#d4880a" });
      s.body(`${id}_t`, name, { x: 265, y: y + 12, w: 600, weight: 700, color: "#f5e6d3" });
      s.body(`${id}_d`, desc, { x: 265, y: y + 60, w: 600, color: "#c9956a" });
    });

    s.effect("tr", [
      { effectType: "flash", effectParams: { intensity: 0.4, speed: 3, decay: 0.4 }, enabled: true },
    ], { offset: -400, dur: 600 });
  }, { colors, fonts });

  // ── Scene 3: Our Promise (13800–22000ms) ───────────────────
  const s3 = scene("promise", 13800, 22000, (s) => {
    s.svg(svgConcentricRings, "rings", { x: -100, y: 90, w: 700, h: 700, opacity: 0.07, color: "#d4880a" });
    s.svg(svgGlowOrb, "glow", { x: 1200, y: 300, w: 800, h: 700, opacity: 0.08, color: "#8b4513" });
    s.svg(svgGradientOrb, "orb2", { x: 1400, y: 600, w: 600, h: 600, opacity: 0.06, color: "#d4880a" });

    s.heading("line1", "Made Fresh", { y: 330 });
    s.heading("line2", "Every Morning", { y: 420, color: "#d4880a" });
    s.shape("hline", "rect", "#d4880a", { x: 710, y: 520, w: 500, h: 3, rx: 2, opacity: 0.7 });

    const promises = [
      { id: "pr1", text: "Premium flour & French butter — zero preservatives" },
      { id: "pr2", text: "Baked fresh at 5 AM · Ready by 7 AM every day" },
      { id: "pr3", text: "100% natural, locally-sourced ingredients" },
    ];

    promises.forEach(({ id, text }, i) => {
      const y = 570 + i * 80;
      s.svg(svgCheckMark, `${id}_ck`, { x: 450, y: y - 4, w: 36, h: 36, color: "#a3c97e" });
      s.body(id, text, { x: 500, y, w: 950, color: "#c9956a" });
    });

    s.effect("tr", [
      { effectType: "flash", effectParams: { intensity: 0.4, speed: 3, decay: 0.4 }, enabled: true },
    ], { offset: -400, dur: 700 });
  }, { colors, fonts });

  // ── Scene 4: CTA (21800–30000ms) ───────────────────────────
  const s4 = scene("cta", 21800, MAX, (s) => {
    s.svg(svgPulseRipple, "pulse", { x: 560, y: 90, w: 800, h: 800, opacity: 0.1, color: "#d4880a" });
    s.svg(svgBurstRays, "burst", { x: 760, y: 240, w: 400, h: 400, opacity: 0.06, rays: 12 });
    s.svg(svgConfetti, "confetti", { opacity: 0.5, colors: ["#d4880a", "#f5e6d3", "#c9956a", "#a3c97e", "#f59e0b"] });
    s.svg(svgBadgeStamp, "badge", { x: 820, y: 80, w: 280, h: 280, opacity: 0.9, text: "FRESH", color: "#d4880a", textColor: "#ffffff" });
    s.svg(svgFireworks, "fw", { opacity: 0.45, colors: ["#d4880a", "#f5e6d3", "#c9956a", "#a3c97e", "#f59e0b"] });

    s.heading("headline", "Visit Us Today", { y: 400, shadowColor: "#d4880a", shadowBlur: 20, loop: "glow" });
    s.subtitle("hours", "Mon – Sun  ·  7:00 AM – 7:00 PM", { y: 510 });
    s.cta("btn", "Order Now", { y: 620 });
    s.label("address", "123 Baker Street  ·  (555) 012-3456", { y: 720 });
    s.svg(svgArrowPointer, "arrow", { x: 390, y: 630, w: 100, h: 76, opacity: 0.8, direction: "right" });

    s.effect("tr", [
      { effectType: "flash", effectParams: { intensity: 0.5, speed: 4, decay: 0.3 }, enabled: true },
    ], { offset: -200, dur: 700 });
  }, { colors, fonts });

  // ── Assembly ───────────────────────────────────────────────
  return buildScenes([s1, s2, s3, s4], {
    bg: colors.BG,
    maxTime: MAX,
    projectName: "Artisan Bakery Promo",
    fontAssets: {
      "Playfair Display": { url: "data/fonts/PlayfairDisplay-Variable.ttf", fileType: "ttf" },
      Lato: { url: "data/fonts/Lato-Regular.ttf", fileType: "ttf" },
    },
    colors,
    captions: captions([
      [0.5, 6.0, "Artisan Bakery — Baked with love, served fresh daily"],
      [6.5, 13.5, "Our signature creations — From sourdough to custom cakes"],
      [14.0, 21.5, "Made fresh every morning — 100% natural ingredients"],
      [22.0, 29.5, "Visit us today — Order now at 123 Baker Street"],
    ]),
    captionAnimation: {
      preset: "karaoke", inType: "fadeIn", inDuration: 300,
      outType: "fadeOut", outDuration: 200,
      karaokeHighlightColor: "#d4880a", karaokeStyle: "glow", easing: "easeOut",
    },
    globalCaptionStyle: {
      fontSize: 32, fontFamily: "Playfair Display", fontColor: "#f5e6d3", fontWeight: 600,
      textAlign: "center", lineHeight: 1.3, charSpacing: 0, styles: [],
      strokeWidth: 2, strokeColor: "#1a0f0a",
      shadowColor: "rgba(212,136,10,0.5)", shadowBlur: 8, shadowOffsetX: 0, shadowOffsetY: 2,
      backgroundColor: "",
    },
  });
}
