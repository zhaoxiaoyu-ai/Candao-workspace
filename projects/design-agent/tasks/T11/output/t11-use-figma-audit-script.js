/**
 * T11 Tappo App booking read-only audit script.
 *
 * Intended runner:
 * - Figma MCP `use_figma`
 * - fileKey: anMsqgZYi8ZqmJXZah78KI
 * - skillNames: "figma-use,figma-generate-design"
 *
 * Scope:
 * - Read-only.
 * - Audits only the known Tappo App booking frames listed in BOOKING_FRAME_IDS.
 * - Does not mutate, create, delete, or move any Figma nodes.
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

const EXPECTED = {
  bookingPrimary: "#F6D365",
  bookingGradientEnd: "#FDCB85",
  oldDarkYellow: "#9A6A00",
  sidebarLabels: ["訂座", "經營", "設置", "通知", "WiFi", "退出"],
  topbarLabels: ["中環旗艦店", "功能"],
  wrongTopbarLabels: ["切換應用", "Breakfast", "Search table", "Temporary addition", "外賣點餐", "指引"],
  statusLabels: ["全部 (6)", "待確認 (2)", "已確認 (1)", "已到店 (1)", "已取消 (1)", "已爽約 (1)"],
};

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

function componentName(instance) {
  const main = instance.mainComponent;
  const set = main?.parent?.type === "COMPONENT_SET" ? main.parent : null;
  return set?.name || main?.name || instance.name || "";
}

function boundPaintVariableIds(paints) {
  if (!Array.isArray(paints)) return [];
  return paints.map(paint => paint.boundVariables?.color?.id).filter(Boolean);
}

async function getVariableNamesById(ids) {
  const uniqueIds = [...new Set(ids.filter(Boolean))];
  const pairs = await Promise.all(
    uniqueIds.map(async id => {
      const variable = await figma.variables.getVariableByIdAsync(id);
      return [id, variable?.name || null];
    }),
  );
  return Object.fromEntries(pairs);
}

function countBy(values) {
  const map = {};
  for (const value of values) map[value] = (map[value] || 0) + 1;
  return map;
}

async function auditFrame(frame) {
  const all = frame.findAll(() => true).filter(isVisible);
  const instances = all.filter(node => node.type === "INSTANCE");
  const texts = all.filter(node => node.type === "TEXT");
  const geometry = all.filter(hasGeometry);
  const stroked = geometry.filter(node => "strokes" in node && Array.isArray(node.strokes) && node.strokes.length);
  const filled = geometry.filter(node => "fills" in node && Array.isArray(node.fills) && node.fills.length);

  const instanceNames = instances.map(componentName).filter(Boolean);
  const visibleTextValues = texts.map(text => (text.characters || "").trim()).filter(Boolean);
  const paintVariableIds = [
    ...texts.flatMap(text => boundPaintVariableIds(text.fills)),
    ...stroked.flatMap(node => boundPaintVariableIds(node.strokes)),
    ...filled.flatMap(node => boundPaintVariableIds(node.fills)),
  ];
  const variableNamesById = await getVariableNamesById(paintVariableIds);

  const oldDarkYellowNodes = filled
    .filter(node => node.fills.some(paint => paintHex(paint) === EXPECTED.oldDarkYellow))
    .map(node => ({ id: node.id, name: node.name, type: node.type }));

  const bookingYellowNodes = filled
    .filter(node => node.fills.some(paint => paintHex(paint) === EXPECTED.bookingPrimary))
    .map(node => ({ id: node.id, name: node.name, type: node.type }));

  return {
    id: frame.id,
    name: frame.name,
    size: { width: frame.width, height: frame.height },
    layoutMode: frame.layoutMode,
    counts: {
      allNodes: all.length,
      instances: instances.length,
      textNodes: texts.length,
      filledNodes: filled.length,
      strokedNodes: stroked.length,
      oldDarkYellowNodes: oldDarkYellowNodes.length,
      bookingYellowNodes: bookingYellowNodes.length,
    },
    componentCounts: {
      button: instanceNames.filter(name => /button|btn|按鈕|按钮/i.test(name)).length,
      input: instanceNames.filter(name => /input|輸入|输入/i.test(name)).length,
      select: instanceNames.filter(name => /select|dropdown|下拉|選擇|选择/i.test(name)).length,
      switch: instanceNames.filter(name => /switch|toggle|開關|开关/i.test(name)).length,
      radio: instanceNames.filter(name => /radio|單選|单选/i.test(name)).length,
      tabs: instanceNames.filter(name => /tab|tabs|頁籤|标签/i.test(name)).length,
      sidebar: instanceNames.filter(name => /側邊欄|侧边栏|sidebar/i.test(name)).length,
      topbar: instanceNames.filter(name => /Component 6|top|bar|header|頂欄|顶栏/i.test(name)).length,
    },
    instanceNameTop20: Object.entries(countBy(instanceNames))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([name, count]) => ({ name, count })),
    tokenBindingCounts: {
      textFillBound: texts.filter(text => boundPaintVariableIds(text.fills).length).length,
      strokeBound: stroked.filter(node => boundPaintVariableIds(node.strokes).length).length,
      fillBound: filled.filter(node => boundPaintVariableIds(node.fills).length).length,
    },
    boundVariableNames: [...new Set(Object.values(variableNamesById).filter(Boolean))].sort(),
    contentChecks: {
      hasSidebarLabels: EXPECTED.sidebarLabels.filter(label => visibleTextValues.includes(label)),
      missingSidebarLabels: EXPECTED.sidebarLabels.filter(label => !visibleTextValues.includes(label)),
      hasTopbarLabels: EXPECTED.topbarLabels.filter(label => visibleTextValues.includes(label)),
      missingTopbarLabels: EXPECTED.topbarLabels.filter(label => !visibleTextValues.includes(label)),
      wrongTopbarLabelsPresent: EXPECTED.wrongTopbarLabels.filter(label => visibleTextValues.includes(label)),
      hasStatusLabels: EXPECTED.statusLabels.filter(label => visibleTextValues.includes(label)),
      missingStatusLabels: EXPECTED.statusLabels.filter(label => !visibleTextValues.includes(label)),
      hasRightSummary: visibleTextValues.includes("今日訂座總覽") || visibleTextValues.includes("今日订座总览"),
    },
    oldDarkYellowNodes: oldDarkYellowNodes.slice(0, 20),
    bookingYellowNodes: bookingYellowNodes.slice(0, 20),
  };
}

async function main() {
  figma.skipInvisibleInstanceChildren = true;

  const page = figma.root.children.find(item => item.name === "UI") || figma.root.children[0];
  await figma.setCurrentPageAsync(page);

  const frames = [];
  for (const id of BOOKING_FRAME_IDS) {
    const node = await figma.getNodeByIdAsync(id);
    if (node && node.type === "FRAME") frames.push(node);
  }

  if (!frames.length) {
    return {
      success: false,
      reason: "No known booking frames found.",
      checkedFrameIds: BOOKING_FRAME_IDS,
      page: page.name,
    };
  }

  const frameAudits = await Promise.all(frames.map(auditFrame));
  return {
    success: true,
    page: page.name,
    checkedFrameIds: BOOKING_FRAME_IDS,
    bookingFrameCount: frames.length,
    expected: EXPECTED,
    totals: {
      oldDarkYellowNodes: frameAudits.reduce((sum, item) => sum + item.counts.oldDarkYellowNodes, 0),
      tabsInstances: frameAudits.reduce((sum, item) => sum + item.componentCounts.tabs, 0),
      radioInstances: frameAudits.reduce((sum, item) => sum + item.componentCounts.radio, 0),
      hasRightSummaryFrames: frameAudits.filter(item => item.contentChecks.hasRightSummary).length,
    },
    frameAudits,
  };
}

return main();
