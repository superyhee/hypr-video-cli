export default function build(h) {
  const { makeText, makeShape, makeTrack, makeAnim, makeKfTrack, makeKf, buildCanvas } = h;

  const MAX_TIME = 12000;
  const CHART_TOP = 270, CHART_BOT = 820, CHART_H = CHART_BOT - CHART_TOP; // 550px
  const BAR_W = 60, BAR_GAP = 120, BAR_X0 = 330;

  const months = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 55 },
    { name: "May", value: 60 },
    { name: "Jun", value: 65 },
    { name: "Jul", value: 72 },
    { name: "Aug", value: 80 },
    { name: "Sep", value: 85 },
    { name: "Oct", value: 92 },
    { name: "Nov", value: 98 },
  ];

  // Gradient color from blue to green based on value
  const barColor = (v) => {
    const t = (v - 40) / 58; // 0..1
    const r = Math.round(59 + t * (34 - 59));
    const g = Math.round(130 + t * (197 - 130));
    const b = Math.round(246 + t * (94 - 246));
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  // --- Elements ---

  const title = makeText("el_title", "Monthly Revenue Growth", {
    x: 260, y: 80, w: 1400, h: 70, start: 300, end: MAX_TIME,
    font: "Montserrat", size: 48, weight: 700, color: "#ffffff", align: "center",
  });
  const subtitle = makeText("el_subtitle", "Q1 – Q4 2025  ·  in thousands USD", {
    x: 460, y: 160, w: 1000, h: 35, start: 600, end: MAX_TIME,
    opacity: 0.6, font: "Fira Code", size: 16, color: "#94a3b8", align: "center",
  });

  // Axes + grid
  const axisX = makeShape("el_axis_x", "rect", "#334155", { x: 260, y: CHART_BOT, w: 1400, h: 2, start: 800, end: MAX_TIME });
  const axisY = makeShape("el_axis_y", "rect", "#334155", { x: 260, y: CHART_TOP, w: 2, h: CHART_H + 2, start: 800, end: MAX_TIME });
  const gridLines = [25, 50, 75].map((v, i) => {
    const y = CHART_BOT - (v / 100) * CHART_H;
    return makeShape(`el_grid${i}`, "rect", "#475569", { x: 262, y, w: 1398, h: 1, start: 800, end: MAX_TIME, opacity: 0.15 });
  });

  // Y-axis labels
  const yLabels = [100, 75, 50, 25].map((v) => {
    const y = CHART_BOT - (v / 100) * CHART_H - 10;
    return makeText(`el_ylbl_${v}`, `$${v}k`, {
      x: 180, y, w: 70, h: 25, start: 800, end: MAX_TIME,
      opacity: 0.4, font: "Fira Code", size: 13, color: "#94a3b8", align: "right",
    });
  });

  // Bars + month labels
  const bars = months.map(({ name, value }, i) => {
    const barH = (value / 100) * CHART_H;
    const x = BAR_X0 + i * BAR_GAP;
    const y = CHART_BOT - barH;
    return makeShape(`el_bar_${name.toLowerCase()}`, "rect", barColor(value), {
      x, y, w: BAR_W, h: barH,
      start: 1200 + i * 100, end: MAX_TIME,
      rx: 4, name: `Bar ${name}`,
    });
  });

  const monthLabels = months.map(({ name }, i) =>
    makeText(`el_lbl_${name.toLowerCase()}`, name, {
      x: BAR_X0 + i * BAR_GAP - 10, y: CHART_BOT + 10, w: 80, h: 25,
      start: 1500 + i * 100, end: MAX_TIME,
      opacity: 0.5, font: "Fira Code", size: 13, color: "#94a3b8", align: "center",
    })
  );

  // Value annotations
  const valJan = makeText("el_val_jan", "$40k", {
    x: BAR_X0 - 10, y: CHART_BOT - (40 / 100) * CHART_H - 30, w: 80, h: 25,
    start: 3500, end: MAX_TIME,
    font: "Montserrat", size: 14, weight: 700, color: "#ffffff", align: "center",
  });
  const valNov = makeText("el_val_nov", "$98k", {
    x: BAR_X0 + 10 * BAR_GAP - 10, y: CHART_BOT - (98 / 100) * CHART_H - 30, w: 80, h: 25,
    start: 4500, end: MAX_TIME,
    font: "Montserrat", size: 14, weight: 700, color: "#ffffff", align: "center",
  });
  const trend = makeText("el_trend", "↗ +145% YoY", {
    x: 1300, y: 900, w: 300, h: 40, start: 5500, end: MAX_TIME,
    font: "Montserrat", size: 28, weight: 700, color: "#22c55e", align: "right",
  });
  const badge = makeText("el_badge", "📊 Live Data", {
    x: 260, y: 900, w: 200, h: 40, start: 6000, end: MAX_TIME,
    font: "Montserrat", size: 18, color: "#94a3b8",
  });

  const elements = [
    title, subtitle, axisX, axisY, ...gridLines, ...yLabels,
    ...bars, ...monthLabels, valJan, valNov, trend, badge,
  ];

  // --- Tracks ---
  const tracks = [
    makeTrack("t_title", "Title", "text", ["el_title", "el_subtitle"]),
    makeTrack("t_values", "Values", "text", [
      ...yLabels.map(e => e.id), ...monthLabels.map(e => e.id),
      "el_val_jan", "el_val_nov", "el_trend", "el_badge",
    ]),
    makeTrack("t_bars", "Bars", "shape", bars.map(e => e.id)),
    makeTrack("t_axes", "Axes", "shape", ["el_axis_x", "el_axis_y", ...gridLines.map(e => e.id)]),
  ];

  // --- Animations ---
  const animations = [
    makeAnim("a_title", "el_title", "fadeIn", 1000, "in", { easing: "easeOut" }),
    makeAnim("a_sub", "el_subtitle", "fadeIn", 800, "in", { easing: "easeOut" }),
    makeAnim("a_ax", "el_axis_x", "fadeIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_ay", "el_axis_y", "fadeIn", 600, "in", { easing: "easeOut" }),
    ...bars.map((b, i) => makeAnim(`a_bar_${i}`, b.id, "fadeIn", 500, "in", { easing: "easeOut" })),
    ...monthLabels.map((l, i) => makeAnim(`a_lbl_${i}`, l.id, "fadeIn", 300, "in", { easing: "easeOut" })),
    makeAnim("a_v1", "el_val_jan", "fadeIn", 500, "in", { easing: "easeOut" }),
    makeAnim("a_v2", "el_val_nov", "fadeIn", 500, "in", { easing: "easeOut" }),
    makeAnim("a_trend", "el_trend", "slideIn", 800, "in", { easing: "easeOut" }),
    makeAnim("a_badge", "el_badge", "fadeIn", 600, "in", { easing: "easeOut" }),
    // Exit animations
    makeAnim("a_title_out", "el_title", "fadeOut", 600, "out", { easing: "easeIn" }),
    makeAnim("a_sub_out", "el_subtitle", "fadeOut", 500, "out", { easing: "easeIn" }),
    makeAnim("a_trend_out", "el_trend", "fadeOut", 500, "out", { easing: "easeIn" }),
    makeAnim("a_badge_out", "el_badge", "fadeOut", 400, "out", { easing: "easeIn" }),
  ];

  // --- Keyframes: bars grow from bottom ---
  const keyframeTracks = bars.map((b, i) =>
    makeKfTrack(`kf_bar_${i}`, b.id, "scale", [
      makeKf(`k${i}a`, 0, { scaleX: 1, scaleY: 0.01 }, "easeOut"),
      makeKf(`k${i}b`, 800 + i * 100, { scaleX: 1, scaleY: 1 }, "easeOutBounce"),
    ])
  );

  return buildCanvas({
    bg: "#0f172a",
    maxTime: MAX_TIME,
    fontAssets: {
      Montserrat: { url: "data/fonts/Montserrat-Variable.ttf", fileType: "ttf" },
      "Fira Code": { url: "data/fonts/FiraCode-Variable.ttf", fileType: "ttf" },
    },
    elements,
    tracks,
    animations,
    keyframeTracks,
    quality: "high",
  });
}
