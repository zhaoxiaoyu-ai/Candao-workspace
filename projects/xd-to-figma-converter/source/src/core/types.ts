export interface XdLayout {
  layoutMode?: "NONE" | "HORIZONTAL" | "VERTICAL";
  primaryAxisSizingMode?: "FIXED" | "HUG" | "FILL";
  counterAxisSizingMode?: "FIXED" | "HUG" | "FILL";
  sizingMode?: "FIXED" | "HUG" | "FILL";
  primaryAxisAlignItems?: "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";
  counterAxisAlignItems?: "MIN" | "CENTER" | "MAX" | "BASELINE";
  itemSpacing?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export interface XdStyle {
  fill?: string;
  strokes?: string[];
  textColor?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  cornerRadius?: number;
  opacity?: number;
  effects?: string[];
}

export interface XdNode {
  id: string;
  name: string;
  type: string;
  componentName?: string;
  children: XdNode[];
  styles?: XdStyle;
  layout?: XdLayout;
  constraints?: Record<string, string>;
  source?: Record<string, unknown>;
}

export interface DesignTokenSet {
  colors: string[];
  typography: Array<{
    fontFamily: string;
    fontWeight: string;
    fontSize: number;
    lineHeight?: number;
    letterSpacing?: number;
  }>;
  spacing: number[];
  radius: number[];
  effects: string[];
}

export interface ComponentLibraryEntry {
  figmaComponentKey: string;
  figmaComponentName: string;
  signature?: string;
}

export type FigmaVariableType = "COLOR" | "FLOAT" | "STRING" | "BOOLEAN";

export interface FigmaVariable {
  id: string;
  name: string;
  resolvedType: FigmaVariableType;
  value: string | number | boolean;
}

export interface CodeConnectMapping {
  componentName: string;
  codeSymbol: string;
  source?: string;
}

export interface ComponentLibrary {
  entries: Record<string, ComponentLibraryEntry>;
  variables?: Record<string, FigmaVariable>;
  codeConnect?: Record<string, CodeConnectMapping>;
}

export interface VariableReference {
  variableId: string;
  variableName: string;
}

export interface FigmaPaint {
  type: "SOLID";
  color: string;
  boundVariable?: VariableReference;
}

export interface FigmaBoundVariables {
  itemSpacing?: VariableReference;
  paddingTop?: VariableReference;
  paddingRight?: VariableReference;
  paddingBottom?: VariableReference;
  paddingLeft?: VariableReference;
  cornerRadius?: VariableReference;
}

export interface FigmaNode {
  id: string;
  name: string;
  type: "FRAME" | "GROUP" | "TEXT" | "RECTANGLE" | "ELLIPSE" | "DOCUMENT" | "INSTANCE";
  layoutMode?: "NONE" | "HORIZONTAL" | "VERTICAL";
  primaryAxisSizingMode?: "FIXED" | "AUTO";
  counterAxisSizingMode?: "FIXED" | "AUTO";
  primaryAxisAlignItems?: "MIN" | "CENTER" | "MAX" | "SPACE_BETWEEN";
  counterAxisAlignItems?: "MIN" | "CENTER" | "MAX" | "BASELINE";
  itemSpacing?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  width?: number;
  height?: number;
  cornerRadius?: number;
  fills?: FigmaPaint[];
  strokes?: FigmaPaint[];
  boundComponentKey?: string;
  boundVariables?: FigmaBoundVariables;
  children: FigmaNode[];
}

export interface ConversionWarning {
  code: string;
  message: string;
  nodeId?: string;
}

export interface ConversionArtifacts {
  figmaDocumentPath: string;
  designTokensPath: string;
  conversionReportPath: string;
}

export interface FigmaContextSnapshot {
  componentCount: number;
  variableCount: number;
  codeConnectCount: number;
  variableCoverage: {
    colors: number;
    spacing: number;
    radius: number;
  };
}

export interface ConversionReport {
  input: {
    path: string;
    fileType: string;
    bytes: number;
  };
  policy: {
    figmaContextQueried: boolean;
    componentsLoaded: boolean;
    variablesLoaded: boolean;
    codeConnectLoaded: boolean;
    generationAllowed: boolean;
    snapshot: FigmaContextSnapshot;
  };
  summary: {
    xdNodeCount: number;
    figmaNodeCount: number;
    matchedComponents: number;
    unmatchedComponents: number;
    boundVariables: number;
    unboundLiterals: number;
    warnings: number;
  };
  warnings: ConversionWarning[];
}

export interface ConversionResult {
  status: "initialized" | "completed" | "failed";
  outputs: string[];
  report: ConversionReport;
}

export interface ParsedXdDocument {
  root: XdNode;
  metadata: {
    inputPath: string;
    fileType: string;
    bytes: number;
  };
  warnings: ConversionWarning[];
}
