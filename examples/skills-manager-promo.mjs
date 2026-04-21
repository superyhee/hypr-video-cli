export default function build(h) {
  const {
    buildCanvas, makeText, makeShape, makeEffect, makeTrack, makeAnim,
    svgGradientOrb, svgVignette, svgParticleNetwork, svgCornerBrackets,
    svgTechNodes, svgPulseRipple,
  } = h;

  const MAX = 30000;

  // Scene timing (30s, 5 scenes)
  // S1: Brand intro       0–6000
  // S2: Problem           6000–12000
  // S3: Solution          12000–18000
  // S4: Features          18000–24000
  // S5: CTA               24000–30000

  const elements = [
    // ── Persistent background ──
    svgGradientOrb("el_orb1", { x: 1200, y: -100, w: 900, h: 900, start: 0, end: MAX, opacity: 0.10, color: "#7c3aed" }),
    svgGradientOrb("el_orb2", { x: -200, y: 500, w: 700, h: 700, start: 0, end: MAX, opacity: 0.08, color: "#3b82f6" }),
    svgVignette("el_vig", { start: 0, end: MAX, opacity: 0.6 }),
    svgParticleNetwork("el_pnet", { x: 0, y: 0, w: 1920, h: 1080, start: 0, end: MAX, opacity: 0.05, color: "#a78bfa" }),
    makeShape("el_topbar", "rect", "#7c3aed", { x: 0, y: 0, w: 1920, h: 4, start: 0, end: MAX }),

    // ── S1: Brand Intro (0–6000) ──
    svgPulseRipple("el_s1_ripple", { x: 760, y: 300, w: 400, h: 400, start: 0, end: 5800, opacity: 0.08, color: "#7c3aed" }),
    makeText("el_s1_label", "AI SKILLS MANAGEMENT", {
      x: 260, y: 365, w: 1400, h: 36, start: 300, end: 5500,
      font: "Fira Code", size: 15, weight: 600, color: "#a78bfa",
      align: "center", charSpacing: 6,
    }),
    makeText("el_s1_title", "Skills Manager", {
      x: 260, y: 405, w: 1400, h: 160, start: 700, end: 5500,
      font: "Montserrat", size: 120, weight: 700, color: "#ffffff",
      align: "center", useGradient: true, gradientColors: ["#a78bfa", "#7c3aed", "#3b82f6"],
    }),
    makeText("el_s1_sub", "One place for all your AI skills", {
      x: 410, y: 585, w: 1100, h: 60, start: 1300, end: 5500,
      font: "Montserrat", size: 30, weight: 400, color: "#94a3b8", align: "center",
    }),
    makeText("el_s1_agents", "Claude Code  ·  Cursor  ·  Copilot  ·  Gemini CLI  ·  11 agents", {
      x: 310, y: 660, w: 1300, h: 40, start: 2000, end: 5500,
      font: "Fira Code", size: 18, weight: 400, color: "#64748b", align: "center",
    }),

    // ── S2: Problem (6000–12000) ──
    makeText("el_s2_label", "THE PROBLEM", {
      x: 260, y: 340, w: 1400, h: 36, start: 6300, end: 11500,
      font: "Fira Code", size: 15, weight: 600, color: "#f87171",
      align: "center", charSpacing: 6,
    }),
    makeText("el_s2_title", "Skills Are Everywhere", {
      x: 260, y: 390, w: 1400, h: 140, start: 6700, end: 11500,
      font: "Montserrat", size: 88, weight: 700, color: "#ffffff", align: "center",
    }),
    makeText("el_s2_sub", "You're juggling skills across 11 different AI agents.\nFragmented directories. Manual file copying. No visibility.", {
      x: 360, y: 560, w: 1200, h: 110, start: 7400, end: 11500,
      font: "Montserrat", size: 26, weight: 400, color: "#94a3b8",
      align: "center", lineHeight: 1.6,
    }),
    makeShape("el_s2_accent", "rect", "#f87171", {
      x: 860, y: 720, w: 200, h: 3, start: 8000, end: 11500, opacity: 0.6,
    }),

    // ── S3: Solution (12000–18000) ──
    svgCornerBrackets("el_s3_brackets", { x: 510, y: 340, w: 900, h: 380, start: 12300, end: 17500, opacity: 0.15, color: "#4ade80" }),
    makeText("el_s3_label", "THE SOLUTION", {
      x: 260, y: 340, w: 1400, h: 36, start: 12300, end: 17500,
      font: "Fira Code", size: 15, weight: 600, color: "#4ade80",
      align: "center", charSpacing: 6,
    }),
    makeText("el_s3_title", "One Dashboard.\nAll Agents.", {
      x: 260, y: 385, w: 1400, h: 220, start: 12700, end: 17500,
      font: "Montserrat", size: 88, weight: 700, color: "#ffffff",
      align: "center", lineHeight: 1.2,
    }),
    makeText("el_s3_sub", "See, install, transfer, and toggle skills — all from one place.", {
      x: 410, y: 630, w: 1100, h: 60, start: 13400, end: 17500,
      font: "Montserrat", size: 28, weight: 400, color: "#94a3b8", align: "center",
    }),

    // ── S4: Features (18000–24000) ──
    svgTechNodes("el_s4_nodes", { x: 0, y: 0, w: 1920, h: 1080, start: 18000, end: 23500, opacity: 0.06, color: "#38bdf8" }),
    makeShape("el_s4_panel", "rect", "#111827", {
      x: 310, y: 160, w: 1300, h: 760, start: 18200, end: 23500, rx: 20, ry: 20, opacity: 0.85,
    }),
    makeText("el_s4_header", "WHAT YOU GET", {
      x: 310, y: 190, w: 1300, h: 50, start: 18400, end: 23500,
      font: "Fira Code", size: 16, weight: 600, color: "#7c3aed",
      align: "center", charSpacing: 6,
    }),
    makeText("el_s4_f1", "Unified Dashboard", {
      x: 440, y: 290, w: 600, h: 55, start: 18700, end: 23500,
      font: "Montserrat", size: 40, weight: 700, color: "#ffffff",
    }),
    makeText("el_s4_f1d", "See every skill across all your agents", {
      x: 440, y: 345, w: 600, h: 40, start: 18700, end: 23500,
      font: "Montserrat", size: 20, weight: 400, color: "#64748b",
    }),
    makeText("el_s4_f2", "One-Click Install", {
      x: 440, y: 420, w: 600, h: 55, start: 19200, end: 23500,
      font: "Montserrat", size: 40, weight: 700, color: "#ffffff",
    }),
    makeText("el_s4_f2d", "Paste a GitHub URL and you're done", {
      x: 440, y: 475, w: 600, h: 40, start: 19200, end: 23500,
      font: "Montserrat", size: 20, weight: 400, color: "#64748b",
    }),
    makeText("el_s4_f3", "Cross-Agent Transfer", {
      x: 440, y: 550, w: 600, h: 55, start: 19700, end: 23500,
      font: "Montserrat", size: 40, weight: 700, color: "#ffffff",
    }),
    makeText("el_s4_f3d", "Push skills between agents instantly", {
      x: 440, y: 605, w: 600, h: 40, start: 19700, end: 23500,
      font: "Montserrat", size: 20, weight: 400, color: "#64748b",
    }),
    makeText("el_s4_f4", "Enable / Disable Toggle", {
      x: 440, y: 680, w: 600, h: 55, start: 20200, end: 23500,
      font: "Montserrat", size: 40, weight: 700, color: "#ffffff",
    }),
    makeText("el_s4_f4d", "Experiment without deleting anything", {
      x: 440, y: 735, w: 600, h: 40, start: 20200, end: 23500,
      font: "Montserrat", size: 20, weight: 400, color: "#64748b",
    }),
    // Feature icons (numbered circles)
    makeShape("el_s4_c1", "circle", "#7c3aed", { x: 370, y: 290, w: 50, h: 50, start: 18700, end: 23500 }),
    makeShape("el_s4_c2", "circle", "#3b82f6", { x: 370, y: 420, w: 50, h: 50, start: 19200, end: 23500 }),
    makeShape("el_s4_c3", "circle", "#4ade80", { x: 370, y: 550, w: 50, h: 50, start: 19700, end: 23500 }),
    makeShape("el_s4_c4", "circle", "#f472b6", { x: 370, y: 680, w: 50, h: 50, start: 20200, end: 23500 }),
    // Supported agents badge
    makeText("el_s4_badge", "Supports 11 agents including Claude Code, Cursor, Copilot, Gemini CLI", {
      x: 310, y: 840, w: 1300, h: 40, start: 20800, end: 23500,
      font: "Fira Code", size: 16, weight: 400, color: "#64748b", align: "center",
    }),

    // ── S5: CTA (24000–30000) ──
    makeText("el_s5_label", "FREE  ·  OPEN SOURCE  ·  MIT", {
      x: 260, y: 340, w: 1400, h: 36, start: 24300, end: 29500,
      font: "Fira Code", size: 15, weight: 600, color: "#a78bfa",
      align: "center", charSpacing: 6,
    }),
    makeText("el_s5_title", "Download Now", {
      x: 260, y: 390, w: 1400, h: 160, start: 24700, end: 29500,
      font: "Montserrat", size: 108, weight: 700, color: "#ffffff",
      align: "center", useGradient: true, gradientColors: ["#a78bfa", "#7c3aed"],
    }),
    makeText("el_s5_sub", "No accounts  ·  No telemetry  ·  Just works", {
      x: 410, y: 570, w: 1100, h: 50, start: 25300, end: 29500,
      font: "Montserrat", size: 24, weight: 400, color: "#64748b", align: "center",
    }),
    makeShape("el_s5_btn", "rect", "#7c3aed", {
      x: 660, y: 640, w: 600, h: 80, start: 25800, end: 29500, rx: 40, ry: 40,
    }),
    makeText("el_s5_cta", "sm.idoevergreen.me", {
      x: 660, y: 648, w: 600, h: 64, start: 25800, end: 29500,
      font: "Fira Code", size: 26, weight: 700, color: "#ffffff", align: "center",
    }),
    makeText("el_s5_platforms", "Windows & Linux available  ·  macOS coming soon", {
      x: 410, y: 750, w: 1100, h: 40, start: 26400, end: 29500,
      font: "Montserrat", size: 20, weight: 400, color: "#475569", align: "center",
    }),

    // ── Scene transition effects ──
    makeEffect("el_fx1", [{ effectType: "flash", effectParams: { intensity: 0.5, speed: 8, decay: 0.4 }, enabled: true }], { start: 5700, end: 6300 }),
    makeEffect("el_fx2", [{ effectType: "flash", effectParams: { intensity: 0.5, speed: 8, decay: 0.4 }, enabled: true }], { start: 11700, end: 12300 }),
    makeEffect("el_fx3", [{ effectType: "flash", effectParams: { intensity: 0.5, speed: 8, decay: 0.4 }, enabled: true }], { start: 17700, end: 18300 }),
    makeEffect("el_fx4", [{ effectType: "flash", effectParams: { intensity: 0.5, speed: 8, decay: 0.4 }, enabled: true }], { start: 23700, end: 24300 }),
  ];

  const tracks = [
    // Top layers first
    makeTrack("t_s1_label", "S1 Labels", "text", ["el_s1_label"]),
    makeTrack("t_s1_title", "S1 Title", "text", ["el_s1_title"]),
    makeTrack("t_s1_sub", "S1 Sub", "text", ["el_s1_sub", "el_s1_agents"]),
    makeTrack("t_s2_text", "S2 Text", "text", ["el_s2_label", "el_s2_title", "el_s2_sub"]),
    makeTrack("t_s3_text", "S3 Text", "text", ["el_s3_label", "el_s3_title", "el_s3_sub"]),
    makeTrack("t_s4_header", "S4 Header", "text", ["el_s4_header"]),
    makeTrack("t_s4_features", "S4 Features", "text", [
      "el_s4_f1", "el_s4_f1d", "el_s4_f2", "el_s4_f2d",
      "el_s4_f3", "el_s4_f3d", "el_s4_f4", "el_s4_f4d", "el_s4_badge",
    ]),
    makeTrack("t_s5_text", "S5 Text", "text", ["el_s5_label", "el_s5_title", "el_s5_sub", "el_s5_cta", "el_s5_platforms"]),
    makeTrack("t_s5_btn", "S5 Button", "shape", ["el_s5_btn"]),
    makeTrack("t_s4_circles", "S4 Circles", "shape", ["el_s4_c1", "el_s4_c2", "el_s4_c3", "el_s4_c4"]),
    makeTrack("t_s4_panel", "S4 Panel", "shape", ["el_s4_panel"]),
    makeTrack("t_s2_accent", "S2 Accent", "shape", ["el_s2_accent"]),
    makeTrack("t_deco_svg", "Deco SVG", "svg", ["el_s1_ripple", "el_s3_brackets", "el_s4_nodes"]),
    makeTrack("t_topbar", "Top Bar", "shape", ["el_topbar"]),
    makeTrack("t_bg_svg", "BG SVG", "svg", ["el_pnet", "el_orb1", "el_orb2"]),
    makeTrack("t_vig", "Vignette", "svg", ["el_vig"]),
    makeTrack("t_fx", "Effects", "effect", ["el_fx1", "el_fx2", "el_fx3", "el_fx4"]),
  ];

  const anims = [];
  const io = (pfx, id, inType, inDur, outDur = 400) => {
    anims.push(makeAnim(`${pfx}_in`, id, inType, inDur, "in", { easing: "easeOut" }));
    anims.push(makeAnim(`${pfx}_ot`, id, "fadeOut", outDur, "out", { easing: "easeIn" }));
  };

  // S1
  io("a1a", "el_s1_label", "fadeIn", 600);
  io("a1b", "el_s1_title", "zoomIn", 1000, 500);
  io("a1c", "el_s1_sub", "fadeIn", 700);
  io("a1d", "el_s1_agents", "fadeIn", 600);
  io("a1e", "el_s1_ripple", "fadeIn", 800, 500);

  // S2
  io("a2a", "el_s2_label", "fadeIn", 600);
  io("a2b", "el_s2_title", "slideIn", 900, 500);
  io("a2c", "el_s2_sub", "fadeIn", 700);
  io("a2d", "el_s2_accent", "slideIn", 500);

  // S3
  io("a3a", "el_s3_label", "fadeIn", 600);
  io("a3b", "el_s3_title", "expandIn", 1000, 500);
  io("a3c", "el_s3_sub", "fadeIn", 700);
  io("a3d", "el_s3_brackets", "fadeIn", 600);

  // S4
  io("a4p", "el_s4_panel", "fadeIn", 500);
  io("a4h", "el_s4_header", "fadeIn", 400);
  io("a4f1", "el_s4_f1", "slideIn", 500);
  io("a4f1d", "el_s4_f1d", "fadeIn", 400);
  io("a4f2", "el_s4_f2", "slideIn", 500);
  io("a4f2d", "el_s4_f2d", "fadeIn", 400);
  io("a4f3", "el_s4_f3", "slideIn", 500);
  io("a4f3d", "el_s4_f3d", "fadeIn", 400);
  io("a4f4", "el_s4_f4", "slideIn", 500);
  io("a4f4d", "el_s4_f4d", "fadeIn", 400);
  io("a4c1", "el_s4_c1", "zoomIn", 400);
  io("a4c2", "el_s4_c2", "zoomIn", 400);
  io("a4c3", "el_s4_c3", "zoomIn", 400);
  io("a4c4", "el_s4_c4", "zoomIn", 400);
  io("a4bg", "el_s4_badge", "fadeIn", 500);
  io("a4nd", "el_s4_nodes", "fadeIn", 600);

  // S5
  io("a5a", "el_s5_label", "fadeIn", 600);
  io("a5b", "el_s5_title", "zoomIn", 900, 500);
  io("a5c", "el_s5_sub", "fadeIn", 700);
  io("a5d", "el_s5_btn", "zoomIn", 600);
  io("a5e", "el_s5_cta", "fadeIn", 600);
  io("a5f", "el_s5_platforms", "fadeIn", 600);
  anims.push(makeAnim("a5_lp", "el_s5_btn", "pulse", 1500, "loop", { easing: "easeInOut" }));

  return buildCanvas({
    bg: "linear-gradient(135deg, #080818 0%, #0d0a1f 50%, #0a0a1a 100%)",
    maxTime: MAX,
    elements,
    tracks,
    animations: anims,
    fontAssets: {
      Montserrat: { url: "data/fonts/Montserrat-Variable.ttf", fileType: "ttf" },
      "Fira Code": { url: "data/fonts/FiraCode-Variable.ttf", fileType: "ttf" },
    },
    quality: "high",
    fps: 30,
  });
}
