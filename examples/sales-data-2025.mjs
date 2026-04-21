export default function build(h) {
  const {
    makeText, makeShape, buildCanvas, theme, autoTracks,
    svgVignette, svgDotGrid, svgGradientOrb, svgParticles,
    svgBarChart, svgDonutChart, svgLineChart, svgStatCard,
    svgNumberCounter, svgLightStreak, svgDataFlow, svgConfetti,
  } = h;

  const t = theme("midnight");
  const MAX = 28000;

  // ── Scene 1: Title (0–6s) ──
  const s1_bg_dot = svgDotGrid("s1_dot", { start: 0, end: MAX, opacity: 0.04, color: "#818cf8" });
  const s1_vig = svgVignette("s1_vig", { start: 0, end: MAX, opacity: 0.6 });
  const s1_orb = svgGradientOrb("s1_orb", { start: 0, end: 7000, opacity: 0.12, color: "#6366f1" });

  const s1_eyebrow = makeText("s1_eye", "ANNUAL REPORT", {
    x: 560, y: 300, w: 800, h: 28, start: 300, end: 5500,
    font: "Montserrat", size: 14, weight: 700, color: t.ACCENT, align: "center",
    charSpacing: 6,
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  const s1_title = makeText("s1_title", "2025 年度销售报告", {
    x: 160, y: 350, w: 1600, h: 140, start: 0, end: 6000,
    font: "Noto Sans SC", size: 96, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["blurIn", 1400], animOut: ["blurOut", 800],
    kf: { scale: { dur: 6000, amp: 0.02 } },
  });

  const s1_div = makeShape("s1_div", "rect", t.ACCENT, {
    x: 760, y: 510, w: 400, h: 3, start: 500, end: 5500,
    animIn: ["expandIn", 500], animOut: ["fadeOut", 300],
  });

  const s1_sub = makeText("s1_sub", "全年业绩总览  ·  关键指标  ·  增长趋势", {
    x: 260, y: 540, w: 1400, h: 60, start: 700, end: 5500,
    font: "Noto Sans SC", size: 30, weight: 400, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 800], animOut: ["fadeOut", 500],
  });

  // ── Scene 2: Quarterly Revenue Bar Chart (5.5–13s) ──
  const s2_orb = svgGradientOrb("s2_orb", { start: 5500, end: 13500, opacity: 0.08, color: "#4f46e5" });
  const s2_flow = svgDataFlow("s2_flow", { start: 5500, end: 13500, opacity: 0.06, color: "#818cf8" });

  const s2_heading = makeText("s2_heading", "季度营收", {
    x: 160, y: 100, w: 1600, h: 90, start: 5500, end: 13000,
    font: "Noto Sans SC", size: 56, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["slideIn", 800], animOut: ["fadeOut", 500],
  });

  const s2_bar = svgBarChart("s2_bar", [
    { label: "Q1", value: 2800, color: "#818cf8" },
    { label: "Q2", value: 3500, color: "#6366f1" },
    { label: "Q3", value: 4200, color: "#4f46e5" },
    { label: "Q4", value: 5100, color: "#a78bfa" },
  ], {
    x: 260, y: 220, w: 700, h: 500, start: 6000, end: 13000,
    labelColor: "#c7d2fe", animDur: "1.2s",
    animIn: ["fadeIn", 800], animOut: ["fadeOut", 500],
  });

  const s2_total = svgNumberCounter("s2_total", {
    x: 1100, y: 280, w: 600, h: 200, start: 6500, end: 13000,
    value: 15600, prefix: "¥", suffix: "万", color: t.ACCENT, dur: "2s",
    animIn: ["zoomIn", 800], animOut: ["fadeOut", 500],
  });

  const s2_total_label = makeText("s2_total_label", "全年总营收", {
    x: 1100, y: 500, w: 600, h: 50, start: 6800, end: 13000,
    font: "Noto Sans SC", size: 28, weight: 400, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  const s2_yoy = makeText("s2_yoy", "▲ 同比增长 32%", {
    x: 1100, y: 560, w: 600, h: 44, start: 7200, end: 13000,
    font: "Noto Sans SC", size: 24, weight: 700, color: t.SUCCESS, align: "center",
    animIn: ["bounceIn", 600], animOut: ["fadeOut", 400],
  });

  // ── Scene 3: KPI Cards + Donut (12.5–21s) ──
  const s3_streak = svgLightStreak("s3_streak", { start: 12500, end: 21500, opacity: 0.05, color: "#818cf8" });

  const s3_heading = makeText("s3_heading", "关键业务指标", {
    x: 160, y: 100, w: 1600, h: 90, start: 12500, end: 20500,
    font: "Noto Sans SC", size: 56, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["blurIn", 800], animOut: ["fadeOut", 500],
  });

  const s3_kpi1 = svgStatCard("s3_kpi1", { value: "1,280", label: "新增客户", trend: "+18%", trendUp: true }, {
    x: 140, y: 240, w: 380, h: 200, start: 13000, end: 20500,
    bg: "rgba(99,102,241,0.15)", accent: t.ACCENT, textColor: t.PRIMARY,
    animIn: ["slideIn", 600], animOut: ["fadeOut", 400],
  });

  const s3_kpi2 = svgStatCard("s3_kpi2", { value: "¥12.2万", label: "客单价", trend: "+8%", trendUp: true }, {
    x: 550, y: 240, w: 380, h: 200, start: 13400, end: 20500,
    bg: "rgba(99,102,241,0.15)", accent: t.ACCENT, textColor: t.PRIMARY,
    animIn: ["slideIn", 600], animOut: ["fadeOut", 400],
  });

  const s3_kpi3 = svgStatCard("s3_kpi3", { value: "92%", label: "客户续约率", trend: "+5%", trendUp: true }, {
    x: 960, y: 240, w: 380, h: 200, start: 13800, end: 20500,
    bg: "rgba(99,102,241,0.15)", accent: t.ACCENT, textColor: t.PRIMARY,
    animIn: ["slideIn", 600], animOut: ["fadeOut", 400],
  });

  const s3_kpi4 = svgStatCard("s3_kpi4", { value: "4.8/5", label: "客户满意度", trend: "+0.3", trendUp: true }, {
    x: 1370, y: 240, w: 380, h: 200, start: 14200, end: 20500,
    bg: "rgba(99,102,241,0.15)", accent: t.ACCENT, textColor: t.PRIMARY,
    animIn: ["slideIn", 600], animOut: ["fadeOut", 400],
  });

  const s3_donut_label = makeText("s3_donut_label", "产品类别占比", {
    x: 160, y: 500, w: 600, h: 50, start: 14500, end: 20500,
    font: "Noto Sans SC", size: 28, weight: 600, color: t.PRIMARY, align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  const s3_donut = svgDonutChart("s3_donut", [
    { value: 40, color: "#6366f1", label: "企业版" },
    { value: 25, color: "#818cf8", label: "专业版" },
    { value: 20, color: "#a78bfa", label: "标准版" },
    { value: 15, color: "#c7d2fe", label: "入门版" },
  ], {
    x: 220, y: 560, w: 480, h: 380, start: 14800, end: 20500,
    centerText: "产品", animDur: "1.2s",
    animIn: ["zoomIn", 800], animOut: ["fadeOut", 500],
  });

  const s3_line_label = makeText("s3_line_label", "月度营收趋势", {
    x: 860, y: 500, w: 900, h: 50, start: 14500, end: 20500,
    font: "Noto Sans SC", size: 28, weight: 600, color: t.PRIMARY, align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  const s3_line = svgLineChart("s3_line", [
    980, 1100, 1250, 1350, 1500, 1420, 1600, 1750, 1900, 2050, 2200, 2500,
  ], {
    x: 860, y: 560, w: 900, h: 380, start: 15000, end: 20500,
    color: t.ACCENT, strokeWidth: 3, showDots: true, animDur: "1.5s",
    animIn: ["fadeIn", 800], animOut: ["fadeOut", 500],
  });

  // ── Scene 4: Summary + CTA (20–28s) ──
  const s4_orb = svgGradientOrb("s4_orb", { start: 20000, end: MAX, opacity: 0.1, color: "#6366f1" });
  const s4_particles = svgParticles("s4_particles", { start: 20000, end: MAX, opacity: 0.15, colors: ["#818cf8", "#a78bfa", "#c7d2fe"] });

  const s4_heading = makeText("s4_heading", "2025 成绩斐然", {
    x: 160, y: 200, w: 1600, h: 130, start: 20000, end: 27500,
    font: "Noto Sans SC", size: 80, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["blurIn", 1200], animOut: ["blurOut", 800],
    kf: { scale: { dur: 7500, amp: 0.02 } },
  });

  const s4_div = makeShape("s4_div", "rect", t.ACCENT, {
    x: 760, y: 350, w: 400, h: 3, start: 20500, end: 27000,
    animIn: ["expandIn", 500], animOut: ["fadeOut", 300],
  });

  const s4_stat1 = makeText("s4_stat1", "营收 ¥1.56 亿    增长 32%    客户 1,280+", {
    x: 260, y: 390, w: 1400, h: 60, start: 21000, end: 27000,
    font: "Noto Sans SC", size: 32, weight: 600, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 800], animOut: ["fadeOut", 500],
  });

  const s4_cta = makeText("s4_cta", "展望 2026  ·  再创新高", {
    x: 360, y: 520, w: 1200, h: 70, start: 22000, end: 27500,
    font: "Noto Sans SC", size: 44, weight: 700, color: t.ACCENT, align: "center",
    animIn: ["bounceIn", 800], animOut: ["fadeOut", 500],
    kf: { scale: { dur: 5500, amp: 0.015 } },
  });

  const s4_confetti = svgConfetti("s4_confetti", {
    start: 22500, end: 26000, opacity: 0.4,
    colors: ["#6366f1", "#818cf8", "#a78bfa", "#c7d2fe", "#fbbf24", "#f43f5e"],
  });

  const s4_footer = makeText("s4_footer", "数据来源：销售部 · 2025年度汇总", {
    x: 460, y: 900, w: 1000, h: 40, start: 22000, end: 27000,
    font: "Noto Sans SC", size: 16, weight: 400, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  const elements = [
    // Global
    s1_bg_dot, s1_vig,
    // Scene 1
    s1_orb, s1_eyebrow, s1_title, s1_div, s1_sub,
    // Scene 2
    s2_orb, s2_flow, s2_heading, s2_bar, s2_total, s2_total_label, s2_yoy,
    // Scene 3
    s3_streak, s3_heading, s3_kpi1, s3_kpi2, s3_kpi3, s3_kpi4,
    s3_donut_label, s3_donut, s3_line_label, s3_line,
    // Scene 4
    s4_orb, s4_particles, s4_heading, s4_div, s4_stat1, s4_cta, s4_confetti, s4_footer,
  ];

  return buildCanvas({
    bg: t.BG, maxTime: MAX, fontAssets: t.fonts,
    elements, tracks: autoTracks(elements),
    fps: 30, quality: "medium",
  });
}
