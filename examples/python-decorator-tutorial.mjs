export default function build(h) {
  const {
    makeText, makeShape, buildCanvas, theme, autoTracks,
    svgVignette, svgDotGrid, svgGradientOrb, svgParticles,
    svgTypewriter, svgCornerBrackets, svgCheckMark,
    svgStepIndicator, svgLightStreak, svgDataFlow,
    svgCircuitTrace, svgArrowPointer, svgConfetti,
    svgMatrixRain, svgCodeBlock,
  } = h;

  const t = theme("tech");
  const MAX = 60000;

  // ═══════════════════════════════════════════
  // Global layers
  // ═══════════════════════════════════════════
  const g_dot = svgDotGrid("g_dot", { start: 0, end: MAX, opacity: 0.03, color: "#4ade80" });
  const g_vig = svgVignette("g_vig", { start: 0, end: MAX, opacity: 0.6 });

  // ═══════════════════════════════════════════
  // Scene 1: Title (0–7s)
  // ═══════════════════════════════════════════
  const s1_orb = svgGradientOrb("s1_orb", { start: 0, end: 7500, opacity: 0.1, color: "#22c55e" });
  const s1_circuit = svgCircuitTrace("s1_circuit", { start: 0, end: 7500, opacity: 0.06, color: "#4ade80", glowColor: "#22c55e" });

  const s1_tag = makeText("s1_tag", "PYTHON TUTORIAL", {
    x: 560, y: 260, w: 800, h: 28, start: 300, end: 6500,
    font: "Montserrat", size: 14, weight: 700, color: t.ACCENT, align: "center",
    charSpacing: 6,
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  const s1_title = makeText("s1_title", "Python 装饰器", {
    x: 160, y: 310, w: 1600, h: 160, start: 0, end: 7000,
    font: "Noto Sans SC", size: 96, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["blurIn", 1400], animOut: ["blurOut", 800],
    kf: { scale: { dur: 7000, amp: 0.02 } },
  });

  const s1_div = makeShape("s1_div", "rect", t.ACCENT, {
    x: 760, y: 490, w: 400, h: 3, start: 500, end: 6500,
    animIn: ["expandIn", 500], animOut: ["fadeOut", 300],
  });

  const s1_sub = makeText("s1_sub", "@decorator 从入门到精通", {
    x: 260, y: 520, w: 1400, h: 60, start: 700, end: 6500,
    font: "Noto Sans SC", size: 32, weight: 400, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 800], animOut: ["fadeOut", 500],
  });

  const s1_emoji = makeText("s1_emoji", "@ + function = magic", {
    x: 460, y: 620, w: 1000, h: 44, start: 1200, end: 6500,
    font: "Fira Code", size: 22, weight: 400, color: t.ACCENT, align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  // ═══════════════════════════════════════════
  // Scene 2: What is a decorator? (6.5–16s)
  // ═══════════════════════════════════════════
  const s2_orb = svgGradientOrb("s2_orb", { start: 6500, end: 16500, opacity: 0.08, color: "#16a34a" });
  const s2_flow = svgDataFlow("s2_flow", { start: 6500, end: 16500, opacity: 0.05, color: "#4ade80" });

  const s2_heading = makeText("s2_heading", "什么是装饰器？", {
    x: 160, y: 80, w: 1600, h: 90, start: 6500, end: 16000,
    font: "Noto Sans SC", size: 56, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["slideIn", 800], animOut: ["fadeOut", 500],
  });

  const s2_div = makeShape("s2_div", "rect", t.ACCENT, {
    x: 760, y: 180, w: 400, h: 3, start: 7000, end: 15500,
    animIn: ["expandIn", 500], animOut: ["fadeOut", 300],
  });

  const s2_def = makeText("s2_def", "装饰器是一个函数，它接受一个函数作为参数，\n返回一个增强后的新函数", {
    x: 260, y: 210, w: 1400, h: 100, start: 7300, end: 15500,
    font: "Noto Sans SC", size: 28, weight: 400, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 800], animOut: ["fadeOut", 500],
  });

  // Visual: function → decorator → enhanced function
  const s2_box1_bg = makeShape("s2_box1_bg", "rect", "rgba(74,222,128,0.1)", {
    x: 180, y: 370, w: 400, h: 160, start: 8500, end: 15000, rx: 12,
    animIn: ["fadeIn", 500], animOut: ["fadeOut", 400],
  });
  const s2_box1 = makeText("s2_box1", "原始函数\nmy_func()", {
    x: 180, y: 400, w: 400, h: 100, start: 8500, end: 15000,
    font: "Noto Sans SC", size: 24, weight: 600, color: t.PRIMARY, align: "center",
    animIn: ["zoomIn", 600], animOut: ["fadeOut", 400],
  });

  const s2_arrow1 = svgArrowPointer("s2_arrow1", {
    x: 600, y: 410, w: 160, h: 80, start: 9200, end: 15000,
    color: t.ACCENT, direction: "right",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  const s2_box2_bg = makeShape("s2_box2_bg", "rect", "rgba(74,222,128,0.2)", {
    x: 760, y: 370, w: 400, h: 160, start: 9600, end: 15000, rx: 12,
    animIn: ["fadeIn", 500], animOut: ["fadeOut", 400],
  });
  const s2_box2 = makeText("s2_box2", "@decorator\n装饰器包装", {
    x: 760, y: 400, w: 400, h: 100, start: 9600, end: 15000,
    font: "Noto Sans SC", size: 24, weight: 700, color: t.ACCENT, align: "center",
    animIn: ["bounceIn", 600], animOut: ["fadeOut", 400],
  });

  const s2_arrow2 = svgArrowPointer("s2_arrow2", {
    x: 1180, y: 410, w: 160, h: 80, start: 10300, end: 15000,
    color: t.ACCENT, direction: "right",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  const s2_box3_bg = makeShape("s2_box3_bg", "rect", "rgba(74,222,128,0.1)", {
    x: 1340, y: 370, w: 400, h: 160, start: 10700, end: 15000, rx: 12,
    animIn: ["fadeIn", 500], animOut: ["fadeOut", 400],
  });
  const s2_box3 = makeText("s2_box3", "增强函数\n新功能!", {
    x: 1340, y: 400, w: 400, h: 100, start: 10700, end: 15000,
    font: "Noto Sans SC", size: 24, weight: 600, color: t.SUCCESS, align: "center",
    animIn: ["zoomIn", 600], animOut: ["fadeOut", 400],
  });

  const s2_analogy = makeText("s2_analogy", "就像给手机贴膜 —— 不改变手机本身，却增加了保护功能", {
    x: 260, y: 600, w: 1400, h: 50, start: 11500, end: 15500,
    font: "Noto Sans SC", size: 24, weight: 400, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  // ═══════════════════════════════════════════
  // Scene 3: Basic Syntax (15.5–27s)
  // ═══════════════════════════════════════════
  const s3_streak = svgLightStreak("s3_streak", { start: 15500, end: 27500, opacity: 0.04, color: "#4ade80" });

  const s3_heading = makeText("s3_heading", "基础语法", {
    x: 160, y: 80, w: 1600, h: 90, start: 15500, end: 27000,
    font: "Noto Sans SC", size: 56, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["blurIn", 800], animOut: ["fadeOut", 500],
  });

  // Code block background
  const s3_code_bg = makeShape("s3_code_bg", "rect", "rgba(0,0,0,0.5)", {
    x: 160, y: 200, w: 1600, h: 500, start: 16000, end: 26500, rx: 16,
    animIn: ["fadeIn", 500], animOut: ["fadeOut", 400],
  });

  const s3_code_title = makeText("s3_code_title", "decorator.py", {
    x: 200, y: 210, w: 300, h: 30, start: 16000, end: 26500,
    font: "Fira Code", size: 14, weight: 400, color: "#6b7280", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  // Code lines - staggered appearance
  const s3_c1 = makeText("s3_c1", "def my_decorator(func):", {
    x: 220, y: 260, w: 1400, h: 36, start: 16500, end: 26500,
    font: "Fira Code", size: 22, weight: 400, color: "#93c5fd", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s3_c2 = makeText("s3_c2", "    def wrapper(*args, **kwargs):", {
    x: 220, y: 304, w: 1400, h: 36, start: 17000, end: 26500,
    font: "Fira Code", size: 22, weight: 400, color: "#93c5fd", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s3_c3 = makeText("s3_c3", "        print(\"Before calling\")", {
    x: 220, y: 348, w: 1400, h: 36, start: 17500, end: 26500,
    font: "Fira Code", size: 22, weight: 400, color: "#fde68a", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s3_c4 = makeText("s3_c4", "        result = func(*args, **kwargs)", {
    x: 220, y: 392, w: 1400, h: 36, start: 18000, end: 26500,
    font: "Fira Code", size: 22, weight: 400, color: t.PRIMARY, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s3_c5 = makeText("s3_c5", "        print(\"After calling\")", {
    x: 220, y: 436, w: 1400, h: 36, start: 18500, end: 26500,
    font: "Fira Code", size: 22, weight: 400, color: "#fde68a", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s3_c6 = makeText("s3_c6", "        return result", {
    x: 220, y: 480, w: 1400, h: 36, start: 19000, end: 26500,
    font: "Fira Code", size: 22, weight: 400, color: "#c4b5fd", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s3_c7 = makeText("s3_c7", "    return wrapper", {
    x: 220, y: 524, w: 1400, h: 36, start: 19500, end: 26500,
    font: "Fira Code", size: 22, weight: 400, color: "#c4b5fd", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  // Annotation: highlight the key point
  const s3_anno_bg = makeShape("s3_anno_bg", "rect", "rgba(74,222,128,0.15)", {
    x: 160, y: 730, w: 1600, h: 60, start: 20500, end: 26500, rx: 8,
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s3_anno = makeText("s3_anno", "核心模式：接收函数 → 内部定义 wrapper → 返回 wrapper", {
    x: 260, y: 740, w: 1400, h: 44, start: 20500, end: 26500,
    font: "Noto Sans SC", size: 24, weight: 600, color: t.ACCENT, align: "center",
    animIn: ["slideIn", 600], animOut: ["fadeOut", 400],
  });

  // ═══════════════════════════════════════════
  // Scene 4: @ Syntax Sugar (26.5–36s)
  // ═══════════════════════════════════════════
  const s4_orb = svgGradientOrb("s4_orb", { start: 26500, end: 36500, opacity: 0.08, color: "#22c55e" });

  const s4_heading = makeText("s4_heading", "@ 语法糖", {
    x: 160, y: 80, w: 1600, h: 90, start: 26500, end: 36000,
    font: "Noto Sans SC", size: 56, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["slideIn", 800], animOut: ["fadeOut", 500],
  });

  // Left side: without @
  const s4_left_label = makeText("s4_left_label", "不用 @", {
    x: 160, y: 200, w: 780, h: 44, start: 27000, end: 35500,
    font: "Noto Sans SC", size: 28, weight: 600, color: t.SECONDARY, align: "center",
    animIn: ["fadeIn", 500], animOut: ["fadeOut", 400],
  });

  const s4_left_bg = makeShape("s4_left_bg", "rect", "rgba(0,0,0,0.5)", {
    x: 160, y: 260, w: 780, h: 260, start: 27000, end: 35500, rx: 12,
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s4_left_c1 = makeText("s4_left_c1", "def say_hello():", {
    x: 200, y: 280, w: 700, h: 36, start: 27500, end: 35500,
    font: "Fira Code", size: 20, weight: 400, color: "#93c5fd", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s4_left_c2 = makeText("s4_left_c2", "    print(\"Hello!\")", {
    x: 200, y: 324, w: 700, h: 36, start: 27800, end: 35500,
    font: "Fira Code", size: 20, weight: 400, color: "#fde68a", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s4_left_c3 = makeText("s4_left_c3", "", {
    x: 200, y: 380, w: 700, h: 36, start: 28200, end: 35500,
    font: "Fira Code", size: 20, weight: 400, color: "#6b7280", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s4_left_c4 = makeText("s4_left_c4", "say_hello = my_decorator(say_hello)", {
    x: 200, y: 420, w: 700, h: 36, start: 28600, end: 35500,
    font: "Fira Code", size: 20, weight: 400, color: "#f87171", align: "left",
    animIn: ["bounceIn", 500], animOut: ["fadeOut", 300],
  });

  // Right side: with @
  const s4_right_label = makeText("s4_right_label", "用 @", {
    x: 980, y: 200, w: 780, h: 44, start: 27000, end: 35500,
    font: "Noto Sans SC", size: 28, weight: 600, color: t.ACCENT, align: "center",
    animIn: ["fadeIn", 500], animOut: ["fadeOut", 400],
  });

  const s4_right_bg = makeShape("s4_right_bg", "rect", "rgba(74,222,128,0.08)", {
    x: 980, y: 260, w: 780, h: 260, start: 27000, end: 35500, rx: 12,
    stroke: t.ACCENT, strokeWidth: 1,
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s4_right_c1 = makeText("s4_right_c1", "@my_decorator", {
    x: 1020, y: 290, w: 700, h: 36, start: 29500, end: 35500,
    font: "Fira Code", size: 22, weight: 700, color: t.ACCENT, align: "left",
    animIn: ["bounceIn", 600], animOut: ["fadeOut", 300],
  });
  const s4_right_c2 = makeText("s4_right_c2", "def say_hello():", {
    x: 1020, y: 340, w: 700, h: 36, start: 30000, end: 35500,
    font: "Fira Code", size: 22, weight: 400, color: "#93c5fd", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s4_right_c3 = makeText("s4_right_c3", "    print(\"Hello!\")", {
    x: 1020, y: 390, w: 700, h: 36, start: 30300, end: 35500,
    font: "Fira Code", size: 22, weight: 400, color: "#fde68a", align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  const s4_check = svgCheckMark("s4_check", {
    x: 1620, y: 280, w: 80, h: 80, start: 30800, end: 35500,
    color: t.SUCCESS, dur: "0.6s",
    animIn: ["zoomIn", 400], animOut: ["fadeOut", 300],
  });

  const s4_note = makeText("s4_note", "@ 语法更简洁优雅，效果完全相同！", {
    x: 260, y: 580, w: 1400, h: 50, start: 31500, end: 35500,
    font: "Noto Sans SC", size: 26, weight: 600, color: t.ACCENT, align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  // ═══════════════════════════════════════════
  // Scene 5: Common Use Cases (35.5–50s)
  // ═══════════════════════════════════════════
  const s5_streak = svgLightStreak("s5_streak", { start: 35500, end: 50500, opacity: 0.04, color: "#4ade80" });

  const s5_heading = makeText("s5_heading", "常见应用场景", {
    x: 160, y: 80, w: 1600, h: 90, start: 35500, end: 50000,
    font: "Noto Sans SC", size: 56, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["blurIn", 800], animOut: ["fadeOut", 500],
  });

  const s5_steps = svgStepIndicator("s5_steps", {
    x: 360, y: 170, w: 1200, h: 40, start: 36000, end: 50000,
    steps: 4, activeStep: 3, activeColor: t.ACCENT, dur: "3s",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  // Use case 1: Timing
  const s5_u1_bg = makeShape("s5_u1_bg", "rect", "rgba(74,222,128,0.08)", {
    x: 160, y: 250, w: 780, h: 280, start: 36500, end: 49500, rx: 12,
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u1_icon = makeText("s5_u1_icon", "# 1", {
    x: 200, y: 270, w: 100, h: 36, start: 36500, end: 49500,
    font: "Fira Code", size: 18, weight: 700, color: t.ACCENT, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u1_title = makeText("s5_u1_title", "@timer  计时器", {
    x: 200, y: 310, w: 700, h: 44, start: 36800, end: 49500,
    font: "Noto Sans SC", size: 28, weight: 700, color: t.PRIMARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 300],
  });
  const s5_u1_desc = makeText("s5_u1_desc", "记录函数运行耗时，\n性能分析必备", {
    x: 200, y: 370, w: 700, h: 80, start: 37200, end: 49500,
    font: "Noto Sans SC", size: 22, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  // Use case 2: Logging
  const s5_u2_bg = makeShape("s5_u2_bg", "rect", "rgba(74,222,128,0.08)", {
    x: 980, y: 250, w: 780, h: 280, start: 38000, end: 49500, rx: 12,
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u2_icon = makeText("s5_u2_icon", "# 2", {
    x: 1020, y: 270, w: 100, h: 36, start: 38000, end: 49500,
    font: "Fira Code", size: 18, weight: 700, color: t.ACCENT, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u2_title = makeText("s5_u2_title", "@log  日志记录", {
    x: 1020, y: 310, w: 700, h: 44, start: 38300, end: 49500,
    font: "Noto Sans SC", size: 28, weight: 700, color: t.PRIMARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 300],
  });
  const s5_u2_desc = makeText("s5_u2_desc", "自动记录函数调用，\n调试排查利器", {
    x: 1020, y: 370, w: 700, h: 80, start: 38700, end: 49500,
    font: "Noto Sans SC", size: 22, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  // Use case 3: Auth
  const s5_u3_bg = makeShape("s5_u3_bg", "rect", "rgba(74,222,128,0.08)", {
    x: 160, y: 570, w: 780, h: 280, start: 39500, end: 49500, rx: 12,
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u3_icon = makeText("s5_u3_icon", "# 3", {
    x: 200, y: 590, w: 100, h: 36, start: 39500, end: 49500,
    font: "Fira Code", size: 18, weight: 700, color: t.ACCENT, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u3_title = makeText("s5_u3_title", "@login_required  权限验证", {
    x: 200, y: 630, w: 700, h: 44, start: 39800, end: 49500,
    font: "Noto Sans SC", size: 28, weight: 700, color: t.PRIMARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 300],
  });
  const s5_u3_desc = makeText("s5_u3_desc", "Flask / Django 路由保护，\n未登录自动重定向", {
    x: 200, y: 690, w: 700, h: 80, start: 40200, end: 49500,
    font: "Noto Sans SC", size: 22, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  // Use case 4: Cache
  const s5_u4_bg = makeShape("s5_u4_bg", "rect", "rgba(74,222,128,0.08)", {
    x: 980, y: 570, w: 780, h: 280, start: 41000, end: 49500, rx: 12,
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u4_icon = makeText("s5_u4_icon", "# 4", {
    x: 1020, y: 590, w: 100, h: 36, start: 41000, end: 49500,
    font: "Fira Code", size: 18, weight: 700, color: t.ACCENT, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });
  const s5_u4_title = makeText("s5_u4_title", "@cache  缓存加速", {
    x: 1020, y: 630, w: 700, h: 44, start: 41300, end: 49500,
    font: "Noto Sans SC", size: 28, weight: 700, color: t.PRIMARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 300],
  });
  const s5_u4_desc = makeText("s5_u4_desc", "functools.lru_cache\n缓存结果，避免重复计算", {
    x: 1020, y: 690, w: 700, h: 80, start: 41700, end: 49500,
    font: "Noto Sans SC", size: 22, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["fadeIn", 400], animOut: ["fadeOut", 300],
  });

  // ═══════════════════════════════════════════
  // Scene 6: Summary (49.5–60s)
  // ═══════════════════════════════════════════
  const s6_orb = svgGradientOrb("s6_orb", { start: 49500, end: MAX, opacity: 0.12, color: "#22c55e" });
  const s6_particles = svgParticles("s6_particles", { start: 49500, end: MAX, opacity: 0.12, colors: ["#4ade80", "#22c55e", "#86efac"] });

  const s6_heading = makeText("s6_heading", "装饰器要点总结", {
    x: 160, y: 150, w: 1600, h: 130, start: 49500, end: 59500,
    font: "Noto Sans SC", size: 72, weight: 700, color: t.PRIMARY, align: "center",
    animIn: ["blurIn", 1200], animOut: ["blurOut", 800],
    kf: { scale: { dur: 10000, amp: 0.015 } },
  });

  const s6_div = makeShape("s6_div", "rect", t.ACCENT, {
    x: 760, y: 300, w: 400, h: 3, start: 50000, end: 59000,
    animIn: ["expandIn", 500], animOut: ["fadeOut", 300],
  });

  const s6_p1 = makeText("s6_p1", "1. 装饰器 = 高阶函数，接收并返回函数", {
    x: 360, y: 340, w: 1200, h: 50, start: 50500, end: 59000,
    font: "Noto Sans SC", size: 28, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 400],
  });
  const s6_p2 = makeText("s6_p2", "2. @ 语法糖让代码更简洁", {
    x: 360, y: 410, w: 1200, h: 50, start: 51200, end: 59000,
    font: "Noto Sans SC", size: 28, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 400],
  });
  const s6_p3 = makeText("s6_p3", "3. 常用于计时、日志、权限、缓存", {
    x: 360, y: 480, w: 1200, h: 50, start: 51900, end: 59000,
    font: "Noto Sans SC", size: 28, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 400],
  });
  const s6_p4 = makeText("s6_p4", "4. 记得用 @wraps 保留原函数信息", {
    x: 360, y: 550, w: 1200, h: 50, start: 52600, end: 59000,
    font: "Noto Sans SC", size: 28, weight: 400, color: t.SECONDARY, align: "left",
    animIn: ["slideIn", 500], animOut: ["fadeOut", 400],
  });

  const s6_cta = makeText("s6_cta", "Happy Coding!", {
    x: 460, y: 680, w: 1000, h: 70, start: 53500, end: 59500,
    font: "Montserrat", size: 48, weight: 700, color: t.ACCENT, align: "center",
    animIn: ["bounceIn", 800], animOut: ["fadeOut", 500],
    kf: { scale: { dur: 6000, amp: 0.02 } },
  });

  const s6_confetti = svgConfetti("s6_confetti", {
    start: 54000, end: 58000, opacity: 0.35,
    colors: ["#4ade80", "#22c55e", "#86efac", "#fbbf24", "#818cf8"],
  });

  const s6_footer = makeText("s6_footer", "Python Decorators Tutorial  |  @decorator", {
    x: 460, y: 940, w: 1000, h: 36, start: 53000, end: 59000,
    font: "Fira Code", size: 16, weight: 400, color: "#6b7280", align: "center",
    animIn: ["fadeIn", 600], animOut: ["fadeOut", 400],
  });

  const elements = [
    // Global
    g_dot, g_vig,
    // Scene 1: Title
    s1_orb, s1_circuit, s1_tag, s1_title, s1_div, s1_sub, s1_emoji,
    // Scene 2: What is a decorator
    s2_orb, s2_flow, s2_heading, s2_div, s2_def,
    s2_box1_bg, s2_box1, s2_arrow1, s2_box2_bg, s2_box2, s2_arrow2, s2_box3_bg, s2_box3,
    s2_analogy,
    // Scene 3: Basic Syntax
    s3_streak, s3_heading, s3_code_bg, s3_code_title,
    s3_c1, s3_c2, s3_c3, s3_c4, s3_c5, s3_c6, s3_c7,
    s3_anno_bg, s3_anno,
    // Scene 4: @ Syntax Sugar
    s4_orb, s4_heading,
    s4_left_label, s4_left_bg, s4_left_c1, s4_left_c2, s4_left_c3, s4_left_c4,
    s4_right_label, s4_right_bg, s4_right_c1, s4_right_c2, s4_right_c3,
    s4_check, s4_note,
    // Scene 5: Use Cases
    s5_streak, s5_heading, s5_steps,
    s5_u1_bg, s5_u1_icon, s5_u1_title, s5_u1_desc,
    s5_u2_bg, s5_u2_icon, s5_u2_title, s5_u2_desc,
    s5_u3_bg, s5_u3_icon, s5_u3_title, s5_u3_desc,
    s5_u4_bg, s5_u4_icon, s5_u4_title, s5_u4_desc,
    // Scene 6: Summary
    s6_orb, s6_particles, s6_heading, s6_div,
    s6_p1, s6_p2, s6_p3, s6_p4,
    s6_cta, s6_confetti, s6_footer,
  ];

  return buildCanvas({
    bg: t.BG, maxTime: MAX, fontAssets: t.fonts,
    fps: 30, quality: "medium",
    elements, tracks: autoTracks(elements),
  });
}
