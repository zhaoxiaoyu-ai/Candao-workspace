import type {
  ComponentLibrary,
  ConversionWarning,
  DesignTokenSet,
  FigmaBoundVariables,
  FigmaNode,
  FigmaPaint,
  FigmaVariable,
  VariableReference,
  XdLayout,
  XdNode
} from "./types.js";

export interface FigmaMappingResult {
  document: FigmaNode;
  matchedComponents: number;
  unmatchedComponents: number;
  boundVariables: number;
  unboundLiterals: number;
  warnings: ConversionWarning[];
}

type FloatPool = "spacing" | "radius" | "generic";

interface VariableIndex {
  colors: Map<string, FigmaVariable>;
  floats: Record<FloatPool, Map<number, FigmaVariable>>;
}

function classifyFloatVariable(variable: FigmaVariable): FloatPool {
  const name = variable.name.toLowerCase();
  if (/\b(radius|corner)\b/.test(name) || name.includes("radius")) return "radius";
  if (/\b(space|spacing|padding|gap|margin|inset)\b/.test(name)) return "spacing";
  return "generic";
}

interface MappingContext {
  library: ComponentLibrary | undefined;
  tokens: DesignTokenSet;
  variableIndex: VariableIndex;
  warnings: ConversionWarning[];
  counters: {
    matched: number;
    unmatched: number;
    bound: number;
    unbound: number;
  };
}

const STRUCTURAL_XD_TYPES = new Set(["FRAME", "GROUP", "ARTBOARD", "DOCUMENT", "SECTION"]);

function buildVariableIndex(library?: ComponentLibrary): VariableIndex {
  const colors = new Map<string, FigmaVariable>();
  const floats: VariableIndex["floats"] = {
    spacing: new Map(),
    radius: new Map(),
    generic: new Map()
  };
  if (!library?.variables) return { colors, floats };
  for (const variable of Object.values(library.variables)) {
    if (variable.resolvedType === "COLOR" && typeof variable.value === "string") {
      colors.set(variable.value.toLowerCase(), variable);
    } else if (variable.resolvedType === "FLOAT" && typeof variable.value === "number") {
      const pool = classifyFloatVariable(variable);
      if (!floats[pool].has(variable.value)) {
        floats[pool].set(variable.value, variable);
      }
    }
  }
  return { colors, floats };
}

function preferredPoolsFor(key: string): FloatPool[] {
  if (key === "cornerRadius") return ["radius", "generic"];
  if (/^(itemSpacing|padding)/.test(key)) return ["spacing", "generic"];
  return ["generic", "spacing", "radius"];
}

function toReference(variable: FigmaVariable): VariableReference {
  return { variableId: variable.id, variableName: variable.name };
}

function resolvePaint(
  colorValue: string | undefined,
  context: MappingContext,
  nodeId: string,
  channel: "fill" | "stroke"
): FigmaPaint | undefined {
  if (!colorValue) return undefined;
  const variable = context.variableIndex.colors.get(colorValue.toLowerCase());
  if (variable) {
    context.counters.bound += 1;
    return { type: "SOLID", color: colorValue, boundVariable: toReference(variable) };
  }
  context.counters.unbound += 1;
  context.warnings.push({
    code: channel === "fill" ? "UNBOUND_FILL_LITERAL" : "UNBOUND_STROKE_LITERAL",
    message: `No Figma COLOR variable matched ${channel} "${colorValue}". Literal retained.`,
    nodeId
  });
  return { type: "SOLID", color: colorValue };
}

function resolveFloatBinding(
  value: number | undefined,
  context: MappingContext,
  nodeId: string,
  key: string
): VariableReference | undefined {
  if (typeof value !== "number") return undefined;
  const pools = preferredPoolsFor(key);
  for (const pool of pools) {
    const variable = context.variableIndex.floats[pool].get(value);
    if (variable) {
      context.counters.bound += 1;
      return toReference(variable);
    }
  }
  context.counters.unbound += 1;
  context.warnings.push({
    code: "UNBOUND_NUMERIC_LITERAL",
    message: `No Figma FLOAT variable matched ${key}=${value}. Literal retained.`,
    nodeId
  });
  return undefined;
}

function toSizingMode(axis: "primary" | "counter", layout: XdLayout | undefined): "FIXED" | "AUTO" | undefined {
  const explicit = axis === "primary" ? layout?.primaryAxisSizingMode : layout?.counterAxisSizingMode;
  const mode = explicit ?? layout?.sizingMode;
  if (mode === undefined) return undefined;
  return mode === "HUG" || mode === "FILL" ? "AUTO" : "FIXED";
}

function pickFigmaType(node: XdNode): FigmaNode["type"] {
  if (node.type === "TEXT") return "TEXT";
  if (node.type === "RECTANGLE") return "RECTANGLE";
  if (node.type === "ELLIPSE") return "ELLIPSE";
  if (node.type === "DOCUMENT") return "DOCUMENT";
  if (node.type === "GROUP") return "GROUP";
  return "FRAME";
}

function mapNode(node: XdNode, context: MappingContext): FigmaNode {
  const componentEntry = node.componentName ? context.library?.entries[node.componentName] : undefined;
  if (node.componentName) {
    if (componentEntry) {
      context.counters.matched += 1;
    } else {
      context.counters.unmatched += 1;
      context.warnings.push({
        code: "COMPONENT_NOT_FOUND",
        message: `No Figma library component matched "${node.componentName}".`,
        nodeId: node.id
      });
    }
  }

  const children = node.children.map((child) => mapNode(child, context));
  const preserveStructure = STRUCTURAL_XD_TYPES.has(node.type) || children.length > 0;

  const fills: FigmaPaint[] = [];
  const fillPaint = resolvePaint(node.styles?.fill, context, node.id, "fill");
  if (fillPaint) fills.push(fillPaint);

  const strokes: FigmaPaint[] = [];
  for (const stroke of node.styles?.strokes ?? []) {
    const strokePaint = resolvePaint(stroke, context, node.id, "stroke");
    if (strokePaint) strokes.push(strokePaint);
  }

  const boundVariables: FigmaBoundVariables = {};
  const itemSpacingBinding = resolveFloatBinding(node.layout?.itemSpacing, context, node.id, "itemSpacing");
  if (itemSpacingBinding) boundVariables.itemSpacing = itemSpacingBinding;
  const paddingTopBinding = resolveFloatBinding(node.layout?.paddingTop, context, node.id, "paddingTop");
  if (paddingTopBinding) boundVariables.paddingTop = paddingTopBinding;
  const paddingRightBinding = resolveFloatBinding(node.layout?.paddingRight, context, node.id, "paddingRight");
  if (paddingRightBinding) boundVariables.paddingRight = paddingRightBinding;
  const paddingBottomBinding = resolveFloatBinding(node.layout?.paddingBottom, context, node.id, "paddingBottom");
  if (paddingBottomBinding) boundVariables.paddingBottom = paddingBottomBinding;
  const paddingLeftBinding = resolveFloatBinding(node.layout?.paddingLeft, context, node.id, "paddingLeft");
  if (paddingLeftBinding) boundVariables.paddingLeft = paddingLeftBinding;
  const cornerRadiusBinding = resolveFloatBinding(node.styles?.cornerRadius, context, node.id, "cornerRadius");
  if (cornerRadiusBinding) boundVariables.cornerRadius = cornerRadiusBinding;

  const figmaNode: FigmaNode = {
    id: `figma-${node.id}`,
    name: node.name,
    type: componentEntry ? "INSTANCE" : pickFigmaType(node),
    layoutMode: node.layout?.layoutMode,
    primaryAxisSizingMode: toSizingMode("primary", node.layout),
    counterAxisSizingMode: toSizingMode("counter", node.layout),
    primaryAxisAlignItems: node.layout?.primaryAxisAlignItems,
    counterAxisAlignItems: node.layout?.counterAxisAlignItems,
    itemSpacing: node.layout?.itemSpacing,
    paddingTop: node.layout?.paddingTop,
    paddingRight: node.layout?.paddingRight,
    paddingBottom: node.layout?.paddingBottom,
    paddingLeft: node.layout?.paddingLeft,
    width: node.layout?.width,
    height: node.layout?.height,
    cornerRadius: node.styles?.cornerRadius,
    fills: fills.length > 0 ? fills : undefined,
    strokes: strokes.length > 0 ? strokes : undefined,
    boundComponentKey: componentEntry?.figmaComponentKey,
    boundVariables: Object.keys(boundVariables).length > 0 ? boundVariables : undefined,
    children: preserveStructure ? children : []
  };

  return figmaNode;
}

export function mapXdTreeToFigma(
  root: XdNode,
  tokens: DesignTokenSet,
  library?: ComponentLibrary
): FigmaMappingResult {
  const context: MappingContext = {
    library,
    tokens,
    variableIndex: buildVariableIndex(library),
    warnings: [],
    counters: { matched: 0, unmatched: 0, bound: 0, unbound: 0 }
  };

  const document = mapNode(root, context);

  return {
    document,
    matchedComponents: context.counters.matched,
    unmatchedComponents: context.counters.unmatched,
    boundVariables: context.counters.bound,
    unboundLiterals: context.counters.unbound,
    warnings: context.warnings
  };
}
