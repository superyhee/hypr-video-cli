export default function build(h) {
  const { buildCanvas, makeText, makeShape, makeTrack, makeAnim, svgBreathingRing } = h;

  // --- Metric ring SVGs (behind percentage text) ---
  const ringCpu = svgBreathingRing("el_ring_cpu", {
    x: 110, y: 220, w: 200, h: 200, start: 400, end: 8000, opacity: 0.2,
  });
  const ringMem = svgBreathingRing("el_ring_mem", {
    x: 510, y: 220, w: 200, h: 200, start: 600, end: 8000, opacity: 0.2,
  });
  const ringDisk = svgBreathingRing("el_ring_disk", {
    x: 910, y: 220, w: 200, h: 200, start: 800, end: 8000, opacity: 0.2,
  });
  const ringUptime = svgBreathingRing("el_uptime_ring", {
    x: 1310, y: 220, w: 200, h: 200, start: 1000, end: 8000, opacity: 0.2,
  });

  // --- Bar chart: 8 bars for "Requests / Hour" ---
  const barData = [0.6, 0.8, 0.45, 0.9, 0.7, 0.55, 0.85, 0.65];
  const barMaxH = 180;
  const barW = 40;
  const barGap = 14;
  const barBaseY = 780;
  const barStartX = 160;
  const barColor = "#3b82f6";

  const barElements = barData.map((pct, i) => {
    const bh = Math.round(barMaxH * pct);
    return makeShape(`el_bar_${i}`, "rect", barColor, {
      x: barStartX + i * (barW + barGap),
      y: barBaseY - bh,
      w: barW,
      h: bh,
      start: 1400 + i * 100,
      end: 8000,
      opacity: 0.85,
      rx: 4,
      name: `Bar ${i + 1}`,
    });
  });

  // --- Live status: spinner ring + green dot ---
  const spinner = svgBreathingRing("el_spinner", {
    x: 1350, y: 600, w: 120, h: 120, start: 1300, end: 8000, opacity: 0.25,
  });

  const dot = makeShape("el_dot", "circle", "#22c55e", {
    x: 1770, y: 44, w: 14, h: 14, start: 0, end: 8000, opacity: 1,
    name: "Live Dot",
  });

  // --- Text elements ---
  const elements = [
    makeText("el_title", "Performance Dashboard", {
      x: 260, y: 40, w: 1400, h: 60, start: 0, end: 8000,
      name: "Title", font: "Montserrat", size: 42, weight: 700, color: "#ffffff", align: "center",
    }),
    makeText("el_subtitle", "Real-time metrics  \u00b7  Updated every 30s", {
      x: 460, y: 105, w: 1000, h: 30, start: 200, end: 8000,
      opacity: 0.5, name: "Subtitle", font: "Fira Code", size: 14, color: "#94a3b8", align: "center",
    }),
    ringCpu,
    makeText("el_cpu_pct", "72%", {
      x: 210, y: 310, w: 200, h: 60, start: 500, end: 8000,
      name: "CPU %", font: "Montserrat", size: 48, weight: 800, color: "#3b82f6", align: "center",
    }),
    makeText("el_cpu_label", "CPU Usage", {
      x: 210, y: 370, w: 200, h: 25, start: 500, end: 8000,
      opacity: 0.6, name: "CPU Label", font: "Montserrat", size: 16, color: "#94a3b8", align: "center",
    }),
    ringMem,
    makeText("el_mem_pct", "58%", {
      x: 610, y: 310, w: 200, h: 60, start: 700, end: 8000,
      name: "Mem %", font: "Montserrat", size: 48, weight: 800, color: "#8b5cf6", align: "center",
    }),
    makeText("el_mem_label", "Memory", {
      x: 610, y: 370, w: 200, h: 25, start: 700, end: 8000,
      opacity: 0.6, name: "Mem Label", font: "Montserrat", size: 16, color: "#94a3b8", align: "center",
    }),
    ringDisk,
    makeText("el_disk_pct", "38%", {
      x: 1010, y: 310, w: 200, h: 60, start: 900, end: 8000,
      name: "Disk %", font: "Montserrat", size: 48, weight: 800, color: "#22c55e", align: "center",
    }),
    makeText("el_disk_label", "Disk I/O", {
      x: 1010, y: 370, w: 200, h: 25, start: 900, end: 8000,
      opacity: 0.6, name: "Disk Label", font: "Montserrat", size: 16, color: "#94a3b8", align: "center",
    }),
    ringUptime,
    makeText("el_up_pct", "99.9%", {
      x: 1410, y: 310, w: 200, h: 60, start: 1100, end: 8000,
      name: "Uptime %", font: "Montserrat", size: 48, weight: 800, color: "#f59e0b", align: "center",
    }),
    makeText("el_up_label", "Uptime", {
      x: 1410, y: 370, w: 200, h: 25, start: 1100, end: 8000,
      opacity: 0.6, name: "Uptime Label", font: "Montserrat", size: 16, color: "#94a3b8", align: "center",
    }),
    ...barElements,
    makeText("el_chart_title", "Requests / Hour", {
      x: 140, y: 540, w: 400, h: 25, start: 1200, end: 8000,
      name: "Chart Title", font: "Montserrat", size: 18, weight: 600, color: "#ffffff",
    }),
    spinner,
    makeText("el_status_title", "Live Status", {
      x: 1250, y: 540, w: 400, h: 25, start: 1200, end: 8000,
      name: "Status Title", font: "Montserrat", size: 18, weight: 600, color: "#ffffff",
    }),
    dot,
    makeText("el_live", "LIVE", {
      x: 1800, y: 42, w: 60, h: 25, start: 0, end: 8000,
      name: "Live", font: "Fira Code", size: 14, weight: 700, color: "#22c55e",
    }),
  ];

  const tracks = [
    makeTrack("t_rings", "Rings", "image", [
      "el_ring_cpu", "el_ring_mem", "el_ring_disk", "el_uptime_ring", "el_spinner",
    ]),
    makeTrack("t_bars", "Bars", "shape", barData.map((_, i) => `el_bar_${i}`)),
    makeTrack("t_dot", "Dot", "shape", ["el_dot"]),
    makeTrack("t_title", "Title", "text", ["el_title", "el_subtitle"]),
    makeTrack("t_pct", "Percentages", "text", [
      "el_cpu_pct", "el_cpu_label", "el_mem_pct", "el_mem_label",
      "el_disk_pct", "el_disk_label", "el_up_pct", "el_up_label",
    ]),
    makeTrack("t_labels", "Labels", "text", ["el_chart_title", "el_status_title", "el_live"]),
  ];

  const animations = [
    // Title entrance + exit
    makeAnim("a_t_in", "el_title", "fadeIn", 800, "in", { easing: "easeOut" }),
    makeAnim("a_t_out", "el_title", "fadeOut", 600, "out", { easing: "easeIn" }),
    makeAnim("a_s_in", "el_subtitle", "fadeIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_s_out", "el_subtitle", "fadeOut", 500, "out", { easing: "easeIn" }),

    // Rings entrance
    makeAnim("a_ring_cpu", "el_ring_cpu", "fadeIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_ring_mem", "el_ring_mem", "fadeIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_ring_disk", "el_ring_disk", "fadeIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_ring_up", "el_uptime_ring", "fadeIn", 600, "in", { easing: "easeOut" }),

    // Percentage text entrance
    makeAnim("a_cp", "el_cpu_pct", "zoomIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_cl", "el_cpu_label", "fadeIn", 400, "in", { easing: "easeOut" }),
    makeAnim("a_mp", "el_mem_pct", "zoomIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_ml", "el_mem_label", "fadeIn", 400, "in", { easing: "easeOut" }),
    makeAnim("a_dp", "el_disk_pct", "zoomIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_dl", "el_disk_label", "fadeIn", 400, "in", { easing: "easeOut" }),
    makeAnim("a_up", "el_up_pct", "zoomIn", 600, "in", { easing: "easeOut" }),
    makeAnim("a_ul", "el_up_label", "fadeIn", 400, "in", { easing: "easeOut" }),

    // Bar chart entrance (staggered)
    ...barData.map((_, i) =>
      makeAnim(`a_bar_${i}`, `el_bar_${i}`, "slideIn", 400, "in", { easing: "easeOut" })
    ),

    // Chart / status labels
    makeAnim("a_ct", "el_chart_title", "fadeIn", 500, "in", { easing: "easeOut" }),
    makeAnim("a_st", "el_status_title", "fadeIn", 500, "in", { easing: "easeOut" }),

    // Spinner entrance
    makeAnim("a_spinner", "el_spinner", "fadeIn", 500, "in", { easing: "easeOut" }),

    // Dot + LIVE text
    makeAnim("a_dot", "el_dot", "fadeIn", 400, "in", { easing: "easeOut" }),
    makeAnim("a_live", "el_live", "fadeIn", 400, "in", { easing: "easeOut" }),
    makeAnim("a_live_p", "el_live", "pulse", 2000, "loop", { easing: "easeInOut" }),
    makeAnim("a_dot_p", "el_dot", "pulse", 2000, "loop", { easing: "easeInOut" }),
  ];

  return buildCanvas({
    bg: "#0f172a",
    maxTime: 8000,
    fontAssets: {
      "Montserrat": { url: "data/fonts/Montserrat-Variable.ttf", fileType: "ttf" },
      "Fira Code": { url: "data/fonts/FiraCode-Variable.ttf", fileType: "ttf" },
    },
    elements,
    tracks,
    animations,
    quality: "high",
  });
}
