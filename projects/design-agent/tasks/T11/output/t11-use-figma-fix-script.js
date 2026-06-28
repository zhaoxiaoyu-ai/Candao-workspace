/**
 * T11 Tappo App booking correction script.
 *
 * Intended runner:
 * - Figma MCP `use_figma`
 * - fileKey: anMsqgZYi8ZqmJXZah78KI
 * - skillNames: "figma-use,figma-generate-design"
 *
 * Scope:
 * - Only mutates the known Tappo App booking frames listed in BOOKING_FRAME_IDS.
 * - Stops if none of those booking frames can be found.
 * - Does not modify or delete non-booking pages/frames.
 *
 * Goals:
 * - Restore booking yellow (#F6D365) and gradient (#F6D365 -> #FDCB85).
 * - Remove the previous dark yellow (#9A6A00) visual override.
 * - Rebind normal borders/text to existing Tappo/POS design tokens where discoverable.
 * - Keep yellow only for booking selected/active emphasis and themed controls.
 * - Correct booking sidebar/topbar/status text to match the Pad booking prototype.
 */

const BOOKING_FRAME_IDS = [
  "3318:68380",
  "3320:68138",
  "3320:68826",
  "3320:69975",
  "3320:70929",
  "3321:69714",
  "3323:70108",
  "3324:70502",
];

const THEME = {
  primary: "#F6D365",
  gradientEnd: "#FDCB85",
  background: "#FFF8E8",
  neutralBorderFallback: "#E5E5EA",
  textPrimaryFallback: "#1A1A2E",
  textSecondaryFallback: "#667085",
  surfaceFallback: "#FFFFFF",
};

const PROTOTYPE = {
  sidebarLabels: ["訂座", "經營", "設置", "通知", "WiFi", "退出"],
  sidebarWrongLabels: ["POS", "點餐", "訂單", "菜單", "订单", "菜单", "经营", "设置"],
  topbarWrongLabels: ["切換應用", "Breakfast", "Search table", "Temporary addition", "外賣點餐", "指引", "搜尋桌號", "臨時加菜"],
  storeName: "中環旗艦店",
  dateText: "2026-06-10",
  topAction: "功能",
  statusLabels: ["全部 (6)", "待確認 (2)", "已確認 (1)", "已到店 (1)", "已取消 (1)", "已爽約 (1)"],
};

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: ((value >> 16) & 255) / 255,
    g: ((value >> 8) & 255) / 255,
    b: (value & 255) / 255,
  };
}

function solid(hex, opacity = 1) {
  return { type: "SOLID", color: hexToRgb(hex), opacity };
}

function gradientYellow() {
  return {
    type: "GRADIENT_LINEAR",
    gradientTransform: [
      [1, 0, 0],
      [0, 1, 0],
    ],
    gradientStops: [
      { position: 0, color: { ...hexToRgb(THEME.primary), a: 1 } },
      { position: 1, color: { ...hexToRgb(THEME.gradientEnd), a: 1 } },
    ],
  };
}

function colorValue(hex) {
  return { ...hexToRgb(hex), a: 1 };
}

function paintHex(paint) {
  if (!paint || paint.type !== "SOLID") return "";
  return figma.util.colorToHex(paint.color).toUpperCase();
}

function hasGeometry(node) {
  return "fills" in node || "strokes" in node;
}

function isVisible(node) {
  let current = node;
  while (current && current.type !== "PAGE" && current.type !== "DOCUMENT") {
    if (current.visible === false) return false;
    current = current.parent;
  }
  return true;
}

function nodePath(node) {
  const names = [];
  let current = node;
  while (current && current.type !== "PAGE" && current.type !== "DOCUMENT") {
    names.unshift(current.name || current.type);
    current = current.parent;
  }
  return names.join(" / ");
}

function sortByPosition(nodes) {
  return [...nodes].sort((a, b) => {
    const ab = a.absoluteBoundingBox || { x: 0, y: 0 };
    const bb = b.absoluteBoundingBox || { x: 0, y: 0 };
    return ab.y - bb.y || ab.x - bb.x;
  });
}

function mainComponentName(instance) {
  const main = instance.mainComponent;
  const set = main?.parent?.type === "COMPONENT_SET" ? main.parent : null;
  return set?.name || main?.name || instance.name || "";
}

async function loadFontsForTexts(textNodes) {
  const fonts = new Map();
  for (const text of textNodes) {
    if (!isVisible(text)) continue;
    try {
      for (const seg of text.getStyledTextSegments(["fontName"])) {
        if (seg.fontName && seg.fontName !== figma.mixed) {
          fonts.set(JSON.stringify(seg.fontName), seg.fontName);
        }
      }
    } catch (error) {
      // Some instance text layers may not expose styled segments. Skip them.
    }
  }

  await Promise.all(
    [...fonts.values()].map(async font => {
      try {
        await figma.loadFontAsync(font);
      } catch (error) {
        // Keep existing text if a local font is unavailable.
      }
    }),
  );
}

async function collectVariables() {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const ids = collections.flatMap(collection => collection.variableIds);
  const variables = (await Promise.all(ids.map(id => figma.variables.getVariableByIdAsync(id)))).filter(Boolean);
  return { collections, variables };
}

function findVar(variables, exactNames) {
  const exact = exactNames.map(name => name.toLowerCase());
  return variables.find(variable => exact.includes(variable.name.toLowerCase())) || null;
}

function findVarByRegex(variables, regexes, type = "COLOR") {
  return variables.find(variable => variable.resolvedType === type && regexes.some(regex => regex.test(variable.name))) || null;
}

async function getOrCreateBookingCollection(collections) {
  const existing = collections.find(collection => collection.name === "Tappo App / Booking Theme" || collection.name.includes("Booking Theme"));
  if (existing) return existing;

  const created = figma.variables.createVariableCollection("Tappo App / Booking Theme");
  created.renameMode(created.modes[0].modeId, "Default");
  return created;
}

function upsertColorVariable(collection, variables, name, hex, scopes) {
  const modeId = collection.modes[0].modeId;
  let variable = variables.find(item => item.name === name && item.variableCollectionId === collection.id);
  if (!variable) {
    variable = figma.variables.createVariable(name, collection, "COLOR");
    variables.push(variable);
  }
  variable.scopes = scopes;
  variable.setValueForMode(modeId, colorValue(hex));
  return variable;
}

function bindPaint(variable, fallbackHex, opacity = 1) {
  if (!variable) return solid(fallbackHex, opacity);
  return figma.variables.setBoundVariableForPaint(solid(fallbackHex, opacity), "color", variable);
}

function isOldBookingOrOrangePaint(paint) {
  const hex = paintHex(paint);
  return ["#9A6A00", "#F6D365", "#FDCB85", "#FF6B35", "#FF8A3D", "#FFA764", "#F3A949"].includes(hex);
}

function isNormalBorderCandidate(node) {
  const path = nodePath(node);
  if (/active|selected|checked|primary|button|tab|radio/i.test(path)) return false;
  return /card|row|list|filter|input|select|modal|dialog|sheet|calendar|panel|body|content|form|provider|table/i.test(path);
}

function classifyText(text) {
  const value = (text.characters || "").trim();
  const path = nodePath(text);
  if (!value) return "secondary";
  if (/error|danger|拒絕|取消預約|爽約/.test(path) || /拒絕|爽約|取消/.test(value)) return "danger";
  if (/placeholder|helper|muted|note|caption|日期|郵箱|手機|時段|人數|渠道|備註|搜尋/.test(path)) return "secondary";
  if (/請輸入|請選擇|灰色日期|橘色日期|紅色日期/.test(value)) return "secondary";
  if (/status|chip|tab|button|btn|primary|radio/i.test(path)) return "interactive";
  return "primary";
}

function applyTextToken(text, tokens, mutated) {
  if (!isVisible(text) || !("fills" in text)) return false;

  const kind = classifyText(text);
  let token = tokens.textPrimary;
  let fallback = THEME.textPrimaryFallback;
  if (kind === "secondary") {
    token = tokens.textSecondary || tokens.textPrimary;
    fallback = THEME.textSecondaryFallback;
  }
  if (kind === "danger") {
    token = tokens.danger || tokens.textPrimary;
    fallback = "#D92D20";
  }
  if (!token) return false;

  try {
    text.fills = [bindPaint(token, fallback)];
    mutated.add(text.id);
    return true;
  } catch (error) {
    return false;
  }
}

function applyComponentTheme(frame, tokens, mutated) {
  const instances = frame.findAllWithCriteria({ types: ["INSTANCE"] }).filter(isVisible);
  const stats = { buttonInstances: 0, tabInstances: 0, radioInstances: 0, themedFillNodes: 0, themedTextNodes: 0 };

  for (const instance of instances) {
    const name = mainComponentName(instance);
    const isButton = /button|btn|按鈕|按钮/i.test(name);
    const isTabs = /tab|tabs|頁籤|标签/i.test(name);
    const isRadio = /radio|單選|单选/i.test(name);
    if (!isButton && !isTabs && !isRadio) continue;

    if (isButton) stats.buttonInstances++;
    if (isTabs) stats.tabInstances++;
    if (isRadio) stats.radioInstances++;

    const descendants = instance.findAll(() => true);
    for (const node of descendants.filter(hasGeometry)) {
      if (!("fills" in node) || !Array.isArray(node.fills) || !node.fills.length) continue;
      const path = nodePath(node);
      const shouldTheme = node.fills.some(isOldBookingOrOrangePaint) || /active|selected|checked|primary|button|tab|radio/i.test(path);
      if (!shouldTheme) continue;

      try {
        node.fills = isButton ? [gradientYellow()] : [bindPaint(tokens.bookingPrimary, THEME.primary)];
        mutated.add(node.id);
        stats.themedFillNodes++;
      } catch (error) {
        // Instance internals may be locked by the component. Continue auditing other nodes.
      }
    }

    for (const text of descendants.filter(node => node.type === "TEXT")) {
      if (!isVisible(text)) continue;
      const path = nodePath(text);
      if (!/active|selected|checked|primary|button|tab|radio/i.test(path)) continue;
      try {
        // #F6D365 with white text is too low-contrast. Keep the original yellow and use the system text token.
        text.fills = [bindPaint(tokens.textPrimary, THEME.textPrimaryFallback)];
        mutated.add(text.id);
        stats.themedTextNodes++;
      } catch (error) {
        // Skip locked instance text.
      }
    }
  }

  return stats;
}

function fixNormalBordersAndFills(frame, tokens, mutated) {
  const stats = { strokeFixed: 0, oldYellowFixed: 0, surfaceFixed: 0 };
  const nodes = frame.findAll(() => true).filter(node => isVisible(node) && hasGeometry(node));

  for (const node of nodes) {
    if ("strokes" in node && Array.isArray(node.strokes) && node.strokes.length && isNormalBorderCandidate(node)) {
      try {
        node.strokes = node.strokes.map(() => bindPaint(tokens.border, THEME.neutralBorderFallback));
        mutated.add(node.id);
        stats.strokeFixed++;
      } catch (error) {
        // Continue if a node is locked by an instance.
      }
    }

    if (!("fills" in node) || !Array.isArray(node.fills) || !node.fills.length) continue;
    const path = nodePath(node);
    const hasOldDarkYellow = node.fills.some(paint => paintHex(paint) === "#9A6A00");
    const hasOldOrange = node.fills.some(isOldBookingOrOrangePaint);

    try {
      if (hasOldDarkYellow || (/primary|button|selected|active|checked|status|radio|tab/i.test(path) && hasOldOrange)) {
        node.fills = /button|primary/i.test(path) ? [gradientYellow()] : [bindPaint(tokens.bookingPrimary, THEME.primary)];
        mutated.add(node.id);
        stats.oldYellowFixed++;
      } else if (/card|row|list|filter|input|select|modal|dialog|sheet|calendar|panel|form|provider/i.test(path) && tokens.surface) {
        const allWhiteish = node.fills.every(paint => {
          const hex = paintHex(paint);
          return !hex || ["#FFFFFF", "#F9FAFB", "#FAFAFA", "#FFF8E8"].includes(hex);
        });
        if (allWhiteish) {
          node.fills = [bindPaint(tokens.surface, THEME.surfaceFallback)];
          mutated.add(node.id);
          stats.surfaceFixed++;
        }
      }
    } catch (error) {
      // Continue if locked.
    }
  }

  return stats;
}

function correctSidebarText(frame, tokens, mutated) {
  const candidates = frame.children.filter(child => {
    const name = child.name || "";
    return /側邊欄|侧边栏|sidebar/i.test(name) || (child.width <= 160 && child.height > frame.height * 0.7);
  });
  const sidebar = candidates[0];
  if (!sidebar || !("findAllWithCriteria" in sidebar)) return { found: false, changed: 0 };

  const texts = sortByPosition(
    sidebar.findAllWithCriteria({ types: ["TEXT"] })
      .filter(isVisible)
      .filter(text => {
        const value = (text.characters || "").trim();
        return value && !/^\d+$/.test(value);
      }),
  );

  const replaceable = texts.filter(text => {
    const value = (text.characters || "").trim();
    return PROTOTYPE.sidebarWrongLabels.includes(value) || PROTOTYPE.sidebarLabels.includes(value);
  });
  const targets = replaceable.length >= 4 ? replaceable : texts.slice(0, PROTOTYPE.sidebarLabels.length);
  let changed = 0;

  for (let i = 0; i < Math.min(targets.length, PROTOTYPE.sidebarLabels.length); i++) {
    const text = targets[i];
    try {
      if (text.characters !== PROTOTYPE.sidebarLabels[i]) {
        text.characters = PROTOTYPE.sidebarLabels[i];
        changed++;
      }
      const token = i === 0 ? tokens.bookingPrimary : tokens.textSecondary;
      const fallback = i === 0 ? THEME.primary : THEME.textSecondaryFallback;
      if (token) text.fills = [bindPaint(token, fallback)];
      mutated.add(text.id);
    } catch (error) {
      // Skip locked instance labels.
    }
  }

  return { found: true, changed };
}

function correctTopbarText(frame, tokens, mutated) {
  const candidates = frame.findAll(node => {
    if (node.type !== "FRAME" && node.type !== "INSTANCE" && node.type !== "COMPONENT") return false;
    const name = node.name || "";
    return /Component 6|top|bar|header|頂欄|顶栏/i.test(name) || (node.height <= 110 && node.width > frame.width * 0.5);
  });
  const topbar = candidates[0];
  if (!topbar || !("findAllWithCriteria" in topbar)) return { found: false, changed: 0, hidden: 0 };

  const texts = topbar.findAllWithCriteria({ types: ["TEXT"] }).filter(isVisible);
  let changed = 0;
  let hidden = 0;
  let functionText = null;

  for (const text of texts) {
    const value = (text.characters || "").trim();
    try {
      if (PROTOTYPE.topbarWrongLabels.includes(value)) {
        text.visible = false;
        hidden++;
        mutated.add(text.id);
        continue;
      }
      if (/中環|中环|旗艦|旗舰/.test(value) && value !== PROTOTYPE.storeName) {
        text.characters = PROTOTYPE.storeName;
        changed++;
        mutated.add(text.id);
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(value) && value !== PROTOTYPE.dateText) {
        text.characters = PROTOTYPE.dateText;
        changed++;
        mutated.add(text.id);
      }
      if (value === PROTOTYPE.topAction) functionText = text;
    } catch (error) {
      // Continue if locked.
    }
  }

  if (!functionText) {
    const fallback = texts.find(text => /功能|指引|外賣|Temporary|Search|Breakfast|切換/.test(text.characters || ""));
    if (fallback) {
      try {
        fallback.characters = PROTOTYPE.topAction;
        fallback.visible = true;
        changed++;
        mutated.add(fallback.id);
      } catch (error) {
        // Skip locked text.
      }
    }
  }

  for (const text of texts) {
    if (text.visible === false) continue;
    applyTextToken(text, tokens, mutated);
  }

  return { found: true, changed, hidden };
}

function fixStatusLabels(frame, tokens, mutated) {
  const texts = frame.findAllWithCriteria({ types: ["TEXT"] }).filter(isVisible);
  const stats = { found: 0, themed: 0 };

  for (const text of texts) {
    const value = (text.characters || "").trim();
    if (!PROTOTYPE.statusLabels.includes(value)) continue;
    stats.found++;

    const parent = text.parent;
    if (!parent || !hasGeometry(parent) || !("fills" in parent) || !Array.isArray(parent.fills)) continue;
    try {
      if (value === "全部 (6)" || /active|selected|checked/i.test(nodePath(parent))) {
        parent.fills = [bindPaint(tokens.bookingPrimary, THEME.primary)];
        text.fills = [bindPaint(tokens.textPrimary, THEME.textPrimaryFallback)];
      } else {
        if (tokens.surface) parent.fills = [bindPaint(tokens.surface, THEME.surfaceFallback)];
        if (tokens.textSecondary) text.fills = [bindPaint(tokens.textSecondary, THEME.textSecondaryFallback)];
      }
      mutated.add(parent.id);
      mutated.add(text.id);
      stats.themed++;
    } catch (error) {
      // Skip locked status labels.
    }
  }

  return stats;
}

function frameAudit(frame) {
  const all = frame.findAll(() => true);
  const instances = all.filter(node => node.type === "INSTANCE");
  const texts = all.filter(node => node.type === "TEXT");
  const stroked = all.filter(node => hasGeometry(node) && "strokes" in node && Array.isArray(node.strokes) && node.strokes.length);
  const oldDarkYellow = all.filter(node => hasGeometry(node) && "fills" in node && Array.isArray(node.fills) && node.fills.some(paint => paintHex(paint) === "#9A6A00")).length;

  return {
    id: frame.id,
    name: frame.name,
    instances: instances.length,
    buttonInstances: instances.filter(instance => /button|btn|按鈕|按钮/i.test(mainComponentName(instance))).length,
    tabInstances: instances.filter(instance => /tab|tabs|頁籤|标签/i.test(mainComponentName(instance))).length,
    radioInstances: instances.filter(instance => /radio|單選|单选/i.test(mainComponentName(instance))).length,
    textNodes: texts.length,
    textBoundNodes: texts.filter(text => Object.keys(text.boundVariables || {}).length).length,
    strokeNodes: stroked.length,
    strokeBoundNodes: stroked.filter(node => node.strokes.some(paint => paint.boundVariables?.color?.id)).length,
    oldDarkYellow,
  };
}

async function main() {
  const page = figma.root.children.find(item => item.name === "UI") || figma.root.children[0];
  await figma.setCurrentPageAsync(page);

  const frames = [];
  for (const id of BOOKING_FRAME_IDS) {
    const node = await figma.getNodeByIdAsync(id);
    if (node && node.type === "FRAME") frames.push(node);
  }
  if (!frames.length) {
    throw new Error("No known Tappo booking frames found. Stop without modifying other pages.");
  }

  const { collections, variables } = await collectVariables();
  const bookingCollection = await getOrCreateBookingCollection(collections);

  const bookingPrimary = upsertColorVariable(bookingCollection, variables, "Booking color/primary", THEME.primary, ["FRAME_FILL", "SHAPE_FILL", "TEXT_FILL"]);
  const bookingBorder = upsertColorVariable(bookingCollection, variables, "Booking color/border", THEME.primary, ["STROKE_COLOR", "FRAME_FILL", "SHAPE_FILL"]);
  const bookingBg = upsertColorVariable(bookingCollection, variables, "Booking color/background", THEME.background, ["FRAME_FILL", "SHAPE_FILL"]);
  const gradientStart = upsertColorVariable(bookingCollection, variables, "Booking color/gradient-start", THEME.primary, ["FRAME_FILL", "SHAPE_FILL"]);
  const gradientEnd = upsertColorVariable(bookingCollection, variables, "Booking color/gradient-end", THEME.gradientEnd, ["FRAME_FILL", "SHAPE_FILL"]);

  const tokens = {
    bookingPrimary,
    bookingBorder,
    bookingBg,
    gradientStart,
    gradientEnd,
    surface: findVar(variables, ["POS color/white", "Surface/Primary", "surface/primary", "surface1"]) || findVarByRegex(variables, [/white/i, /surface.*(primary|1)/i]),
    border: findVar(variables, ["POS color/border", "POS color/gray", "Border/Default", "border/default", "border-visible"]) || findVarByRegex(variables, [/border/i, /separator/i, /gray/i, /grey/i]),
    textPrimary: findVar(variables, ["POS color/black", "Text/Primary", "text/primary", "text1"]) || findVarByRegex(variables, [/text.*primary/i, /black/i, /foreground/i]),
    textSecondary: findVar(variables, ["POS color/grey", "Text/Secondary", "text/secondary", "text2"]) || findVarByRegex(variables, [/text.*secondary/i, /gray/i, /grey/i]),
    danger: findVar(variables, ["Error", "error", "POS color/red", "Text/Danger"]) || findVarByRegex(variables, [/error/i, /danger/i, /red/i]),
  };

  await loadFontsForTexts(frames.flatMap(frame => frame.findAllWithCriteria({ types: ["TEXT"] })));

  const mutated = new Set();
  const reports = [];

  for (const frame of frames) {
    if ("fills" in frame && Array.isArray(frame.fills)) {
      frame.fills = [bindPaint(tokens.bookingBg, THEME.background)];
      mutated.add(frame.id);
    }

    const textStats = { tokenized: 0 };
    for (const text of frame.findAllWithCriteria({ types: ["TEXT"] })) {
      if (applyTextToken(text, tokens, mutated)) textStats.tokenized++;
    }

    reports.push({
      id: frame.id,
      name: frame.name,
      textStats,
      componentStats: applyComponentTheme(frame, tokens, mutated),
      borderStats: fixNormalBordersAndFills(frame, tokens, mutated),
      sidebarStats: correctSidebarText(frame, tokens, mutated),
      topbarStats: correctTopbarText(frame, tokens, mutated),
      statusStats: fixStatusLabels(frame, tokens, mutated),
    });
  }

  return {
    success: true,
    page: page.name,
    bookingFrameCount: frames.length,
    mutatedCount: mutated.size,
    mutatedNodeIds: [...mutated],
    bookingTokens: {
      primary: "Booking color/primary = #F6D365",
      gradientStart: "Booking color/gradient-start = #F6D365",
      gradientEnd: "Booking color/gradient-end = #FDCB85",
      background: "Booking color/background = #FFF8E8",
      borderEmphasis: "Booking color/border = #F6D365",
    },
    resolvedTokens: Object.fromEntries(Object.entries(tokens).map(([key, value]) => [key, value ? value.name : null])),
    reports,
    audit: frames.map(frameAudit),
  };
}

return main();
