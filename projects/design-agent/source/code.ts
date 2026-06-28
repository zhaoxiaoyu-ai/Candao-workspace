figma.showUI(__html__, { width: 400, height: 520 });

const BUILD_ID = "2026-03-24-figma-form-refactor-12";

type Primitive = string | number | boolean;
type ComponentVariantValue = string | boolean;

interface SchemaNode {
  type: string;
  name?: string;
  title?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  addonBefore?: string;
  addonAfter?: string;
  width?: number;
  minWidth?: number;
  layout?: "horizontal" | "vertical";
  gap?: number;
  state?: string;
  variant?: string;
  range?: "single" | "range";
  pickerType?: "date" | "time";
  checked?: boolean;
  checkedChildren?: "default" | "text";
  actions?: SchemaNode[];
  children?: SchemaNode[];
  props?: Record<string, Primitive>;
}

interface GenerateMessage {
  type: "generate";
  schema: SchemaNode;
}

interface ValidateMessage {
  type: "validate";
  schema: SchemaNode;
}

interface BootstrapFromImageMessage {
  type: "bootstrap-from-image";
  imageBytes: Uint8Array;
  fileName: string;
  width: number;
  height: number;
  pageType?: "auto" | "form" | "list" | "modal";
  analysis?: {
    pageType?: "form" | "list" | "modal";
    columns?: number;
    sectionCount?: number;
    hasTable?: boolean;
    hasFilterBar?: boolean;
    hasActionBar?: boolean;
    contentWidthRatio?: number;
    contentHeightRatio?: number;
  };
}

type PluginMessage = GenerateMessage | ValidateMessage | BootstrapFromImageMessage;

const NODE_TYPE_ALIASES: Record<string, string> = {
  FormPage: "FormPage",
  ListPage: "ListPage",
  ModalPage: "ModalPage",
  FormContainer: "FormContainer",
  ListContainer: "ListContainer",
  FormSection: "FormSection",
  FilterBar: "FilterBar",
  TableSection: "TableSection",
  FormActionBar: "FormActionBar",
  PageHeader: "PageHeader",
  Button: "Button",
  Row: "Row",
  Input: "Form/Input",
  input: "Form/Input",
  InputWithAddon: "Form/Input",
  inputwithaddon: "Form/Input",
  Select: "Form/Select",
  select: "Form/Select",
  Picker: "Form/Picker",
  DatePicker: "Form/Picker",
  TimePicker: "Form/Picker",
  DateRangePicker: "Form/Picker",
  TimeRangePicker: "Form/Picker",
  datepicker: "Form/Picker",
  timepicker: "Form/Picker",
  daterangepicker: "Form/Picker",
  timerangepicker: "Form/Picker",
  Switch: "Form/Switch",
  switch: "Form/Switch",
  Upload: "Form/Upload",
  upload: "Form/Upload",
  TextArea: "Form/TextArea",
  Textarea: "Form/TextArea",
  textarea: "Form/TextArea",
  InputGroup: "Row",
  RadioGroup: "Form/ChoiceGroup",
  CheckboxGroup: "Form/ChoiceGroup",
  StaticList: "Form/SelectableList",
  staticlist: "Form/SelectableList",
  SelectableList: "Form/SelectableList",
  selectablelist: "Form/SelectableList",
  EditableTable: "Form/EditableTable",
  editabletable: "Form/EditableTable",
  RichTextEditor: "Form/RichTextEditor",
  richtexteditor: "Form/RichTextEditor",
  MultiLangInput: "Form/MultiLangInput",
  multilanginput: "Form/MultiLangInput",
  ScheduleBuilder: "Form/ScheduleBuilder",
  schedulebuilder: "Form/ScheduleBuilder",
  radiogroup: "Form/ChoiceGroup",
  checkboxgroup: "Form/ChoiceGroup",
};

const SUPPORTED_NODE_TYPES = new Set([
  "FormPage",
  "ListPage",
  "ModalPage",
  "FormContainer",
  "ListContainer",
  "FormSection",
  "FilterBar",
  "TableSection",
  "PageHeader",
  "Row",
  "Form/UploadGroup",
  "Form/TextAreaGroup",
  "Form/Input",
  "Form/Select",
  "Form/Picker",
  "Form/Switch",
  "Form/Upload",
  "Form/TextArea",
  "Form/ChoiceGroup",
  "Form/SelectableList",
  "Form/EditableTable",
  "Form/RichTextEditor",
  "Form/MultiLangInput",
  "Form/ScheduleBuilder",
  "FormActionBar",
  "Button",
]);

interface ExactVariableSpec {
  key: string;
  refs: string[];
}

interface ExactVars {
  bgLayout: Variable;
  white: Variable;
  textPrimary: Variable;
  textTertiary: Variable;
  error: Variable;
  borderDefault: Variable;
  brandPrimary: Variable;
  padding16: Variable;
  padding24: Variable;
  paddingVerticalLg16: Variable;
  paddingSm12: Variable;
  paddingXs8: Variable;
  paddingContentHorizontal16: Variable;
  radius8: Variable;
  radius16: Variable;
}

interface ComponentRegistry {
  sets: Map<string, ComponentSetNode>;
  components: Map<string, ComponentNode>;
  templates: Map<string, SceneNode>;
}

type TextTokenKey =
  | "heading.h4"
  | "base.default"
  | "base.strong"
  | "sm.default"
  | "lg.default"
  | "lg.strong";

interface TextTokenSpec {
  styleId: string;
  font: FontName;
  fontSize: number;
  lineHeight: number;
}

const COMPONENT_NAME_ALIASES: Record<string, string[]> = {
  Input: ["Input"],
  Select: ["Select", "Cascader"],
  Picker: ["Picker"],
  Switch: ["Switch"],
  Upload: ["Upload"],
  Button: ["Button"],
  InputRadio: ["InputRadio", "Radio"],
  InputCheckbox: ["InputCheckbox", "Checkbox"],
  SelectableList: ["SelectableList", "SelectableTable", "StaticList", "StaticListTable"],
  EditableTable: ["EditableTable", "EditTable"],
  RichTextEditor: ["RichTextEditor", "Editor", "QuillEditor"],
  MultiLangInput: ["MultiLangInput", "InputMulti"],
  ScheduleBuilder: ["ScheduleBuilder", "Schedule"],
};

const DEFAULT_WIDTHS: Record<string, number> = {
  "Form/Input": 296,
  "Form/Select": 296,
  "Form/Picker": 192,
  "Form/Upload": 296,
  "Form/TextArea": 504,
  "Form/SelectableList": 504,
  "Form/EditableTable": 504,
  "Form/RichTextEditor": 504,
  "Form/MultiLangInput": 296,
  "Form/ScheduleBuilder": 504,
  Button: 120,
};

const TEXT_TOKENS: Record<TextTokenKey, TextTokenSpec> = {
  "heading.h4": {
    styleId: "S:21560457d717ab27d2906e3016716757732e1d5a,",
    font: { family: "Roboto", style: "SemiBold" },
    fontSize: 20,
    lineHeight: 28,
  },
  "base.default": {
    styleId: "S:693875095e43e1a70e3a04c390f7844a9ce041ac,",
    font: { family: "Roboto", style: "Regular" },
    fontSize: 14,
    lineHeight: 22,
  },
  "base.strong": {
    styleId: "S:697a9364dcd4d25c121b53640289dcec307c1134,",
    font: { family: "Roboto", style: "SemiBold" },
    fontSize: 14,
    lineHeight: 22,
  },
  "sm.default": {
    styleId: "S:ee5a8af89cd9b17b80c49f25db5972eb7a020f51,",
    font: { family: "Roboto", style: "Regular" },
    fontSize: 12,
    lineHeight: 20,
  },
  "lg.default": {
    styleId: "S:8d1f7401055a69ae3ca0532350ff8972244a9b42,",
    font: { family: "Roboto", style: "Regular" },
    fontSize: 16,
    lineHeight: 24,
  },
  "lg.strong": {
    styleId: "S:f0c88bc70b967b6f2db9584cc56a2a1e7835b349,",
    font: { family: "Roboto", style: "SemiBold" },
    fontSize: 16,
    lineHeight: 24,
  },
};

const EXACT_VARIABLES: ExactVariableSpec[] = [
  { key: "bgLayout", refs: ["--global/colors/neutral/background/colorbglayout", "global/colors/neutral/background/colorbglayout", "Global/Colors/Neutral/Background/colorBgLayout"] },
  { key: "white", refs: ["--global/colors/neutral/colorwhite", "global/colors/neutral/colorwhite", "Global/Colors/Neutral/colorWhite"] },
  { key: "textPrimary", refs: ["--global/colors/neutral/text/colortext-95", "global/colors/neutral/text/colortext-95", "Global/Colors/Neutral/Text/colorText-95"] },
  { key: "textTertiary", refs: ["--global/colors/neutral/text/colortexttertiary-45", "global/colors/neutral/text/colortexttertiary-45", "Global/Colors/Neutral/Text/colorTextTertiary-45"] },
  { key: "error", refs: ["--global/colors/error/colorerror", "global/colors/error/colorerror", "Global/Colors/Error/colorError"] },
  { key: "borderDefault", refs: ["--global/colors/neutral/border/colorborder-15", "global/colors/neutral/border/colorborder-15", "Global/Colors/Neutral/Border/colorBorder-15"] },
  { key: "brandPrimary", refs: ["--global/colors/brand/colorprimary", "global/colors/brand/colorprimary", "Global/Colors/Brand/colorPrimary"] },
  { key: "padding16", refs: ["--global/spacing/padding/padding-16", "global/spacing/padding/padding-16", "Global/Spacing/Padding/padding-16"] },
  { key: "padding24", refs: ["--global/spacing/padding/paddinglg-24", "global/spacing/padding/paddinglg-24", "Global/Spacing/Padding/paddingLG-24"] },
  { key: "paddingVerticalLg16", refs: ["--global/spacing/padding/paddingcontentverticallg-16", "global/spacing/padding/paddingcontentverticallg-16", "Global/Spacing/Padding/paddingContentVerticalLG-16"] },
  { key: "paddingSm12", refs: ["--global/spacing/padding/paddingsm-12", "global/spacing/padding/paddingsm-12", "Global/Spacing/Padding/paddingSM-12"] },
  { key: "paddingXs8", refs: ["--global/spacing/padding/paddingxs-8", "global/spacing/padding/paddingxs-8", "Global/Spacing/Padding/paddingXS-8"] },
  { key: "paddingContentHorizontal16", refs: ["--global/spacing/padding/paddingcontenthorizontal-16", "global/spacing/padding/paddingcontenthorizontal-16", "Global/Spacing/Padding/paddingContentHorizontal-16"] },
  { key: "radius8", refs: ["--global/border/border-radius/borderradius-8", "--global/border/border-radius/borderradiusouter-8", "global/border/border-radius/borderradius-8", "global/border/border-radius/borderradiusouter-8", "Global/Border/Border Radius/borderRadius-8", "Global/Border/Border Radius/borderRadiusOuter-8"] },
  { key: "radius16", refs: ["--global/border/border-radius/borderradiuslg-16", "global/border/border-radius/borderradiuslg-16", "Global/Border/Border Radius/borderRadiusLG-16"] },
];

const FONT_REGULAR: FontName = { family: "Roboto", style: "Regular" };
const FONT_SEMIBOLD: FontName = { family: "Roboto", style: "SemiBold" };

function normalizeRef(value: string): string {
  const trimmed = value.trim().toLowerCase();
  const withoutVar = trimmed.startsWith("var(") ? trimmed.slice(4).split(",")[0].trim() : trimmed;
  return withoutVar.replace(/\s+/g, "");
}

async function resolveExactVariables(): Promise<ExactVars> {
  const locals = await figma.variables.getLocalVariablesAsync();
  const libraries = await loadLibraryVariables();
  const all = [...locals, ...libraries];
  const resolved = {} as Record<string, Variable>;

  for (const spec of EXACT_VARIABLES) {
    const match = all.find((variable) => variableMatches(variable, spec.refs));
    if (!match) {
      throw new Error(`Missing exact variable: ${spec.refs[0]}`);
    }
    resolved[spec.key] = match;
  }

  return resolved as unknown as ExactVars;
}

async function loadLibraryVariables(): Promise<Variable[]> {
  const imported: Variable[] = [];

  try {
    const collections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
    for (const collection of collections) {
      const variables = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection.key);
      for (const libraryVariable of variables) {
        const importedVariable = await figma.variables.importVariableByKeyAsync(libraryVariable.key);
        imported.push(importedVariable);
      }
    }
  } catch (error) {
    console.warn("[Design Agent] Failed to read library variables", error);
  }

  return imported;
}

function variableMatches(variable: Variable, refs: string[]): boolean {
  const exactNames = [
    normalizeRef(variable.name),
    normalizeRef(variable.codeSyntax.WEB ?? ""),
  ];

  return refs.some((ref) => {
    const normalized = normalizeRef(ref);
    return exactNames.includes(normalized);
  });
}

function bindPaint(variable: Variable): Paint[] {
  return [
    figma.variables.setBoundVariableForPaint(
      { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
      "color",
      variable,
    ),
  ];
}

function bindNumber(node: SceneNode, field: VariableBindableNodeField, variable: Variable): void {
  node.setBoundVariable(field, variable);
}

function bindRadius(frame: FrameNode, variable: Variable): void {
  frame.setBoundVariable("topLeftRadius", variable);
  frame.setBoundVariable("topRightRadius", variable);
  frame.setBoundVariable("bottomLeftRadius", variable);
  frame.setBoundVariable("bottomRightRadius", variable);
}

async function ensureFonts(): Promise<void> {
  await figma.loadFontAsync(FONT_REGULAR);
  await figma.loadFontAsync(FONT_SEMIBOLD);
  for (const token of Object.values(TEXT_TOKENS)) {
    await figma.loadFontAsync(token.font);
  }
}

async function loadNodeFonts(node: SceneNode): Promise<void> {
  if (node.type === "TEXT") {
    const fontName = node.fontName;
    if (fontName !== figma.mixed) {
      await figma.loadFontAsync(fontName);
    }
  }

  if ("children" in node) {
    for (const child of node.children) {
      await loadNodeFonts(child);
    }
  }
}

async function buildComponentRegistry(): Promise<ComponentRegistry> {
  const sets = new Map<string, ComponentSetNode>();
  const components = new Map<string, ComponentNode>();
  const templates = new Map<string, SceneNode>();
  const instanceMainComponents = new Map<string, ComponentNode>();

  await figma.loadAllPagesAsync();
  const pages = figma.root.children.filter((node): node is PageNode => node.type === "PAGE");
  const nodes: SceneNode[] = [];
  for (const page of pages) {
    const pageNodes = page.findAll();
    for (const pageNode of pageNodes) {
      nodes.push(pageNode);
    }
  }
  for (const node of nodes) {
    if (node.type === "COMPONENT_SET") {
      sets.set(node.name, node);
      continue;
    }

    if (node.type === "COMPONENT") {
      components.set(node.name, node);
      continue;
    }

    const current = templates.get(node.name);
    if (!current || templateScore(node) > templateScore(current)) {
      templates.set(node.name, node);
    }
  }

  for (const node of nodes) {
    if (node.type !== "INSTANCE") {
      continue;
    }

    const mainComponent = await node.getMainComponentAsync();
    if (!mainComponent) {
      continue;
    }

    if (mainComponent.parent?.type === "COMPONENT_SET") {
      const set = mainComponent.parent;
      if (!sets.has(set.name)) {
        sets.set(set.name, set);
      }
    } else if (!components.has(mainComponent.name)) {
      instanceMainComponents.set(mainComponent.name, mainComponent);
    }
  }

  for (const [name, component] of instanceMainComponents) {
    components.set(name, component);
  }

  return { sets, components, templates };
}

function templateScore(node: SceneNode): number {
  let score = 0;
  if ("children" in node) {
    score += 100;
    score += node.children.length * 10;
  }
  if (node.type === "FRAME" || node.type === "INSTANCE" || node.type === "GROUP") {
    score += 50;
  }
  if (node.type === "TEXT") {
    score -= 200;
  }
  score += Math.round(node.width * node.height);
  return score;
}

function getDefaultWidth(node: SchemaNode): number | undefined {
  if (typeof node.width === "number") {
    return node.width;
  }

  if (node.type === "Form/Picker") {
    return node.range === "range" ? 296 : 192;
  }

  if (node.type === "Form/Switch") {
    return undefined;
  }

  if (node.type === "Form/ChoiceGroup") {
    const isCheckbox = (node.name || node.label || node.type).toLowerCase().includes("checkbox");
    return isCheckbox ? 368 : 357;
  }

  return DEFAULT_WIDTHS[node.type];
}

function createAutoLayoutFrame(name: string, layout: "VERTICAL" | "HORIZONTAL"): FrameNode {
  const frame = figma.createFrame();
  frame.name = name;
  frame.layoutMode = layout;
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.fills = [];
  frame.strokes = [];
  return frame;
}

async function createTextNode(content: string, tokenKey: TextTokenKey, fills: Paint[]): Promise<TextNode> {
  const token = TEXT_TOKENS[tokenKey];
  const text = figma.createText();
  await figma.loadFontAsync(token.font);
  text.fontName = token.font;
  text.characters = content;
  text.fontSize = token.fontSize;
  text.lineHeight = { value: token.lineHeight, unit: "PIXELS" };
  await text.setTextStyleIdAsync(token.styleId);
  text.fills = fills;
  return text;
}

function setWidth(node: SceneNode, width?: number, minWidth?: number): void {
  if (width == null && minWidth == null) {
    return;
  }

  if ("layoutSizingHorizontal" in node) {
    node.layoutSizingHorizontal = "FIXED";
  }

  if ("resize" in node && typeof width === "number" && node.type !== "INSTANCE") {
    node.resize(width, node.height);
  }

  if ("minWidth" in node && typeof minWidth === "number") {
    node.minWidth = minWidth;
  }
}

function setFixedFrameWidth(frame: FrameNode, width: number): void {
  frame.layoutSizingHorizontal = "FIXED";
  frame.resize(width, Math.max(frame.height, 1));
}

function findVariantComponent(
  registry: ComponentRegistry,
  componentName: string,
  variants?: Record<string, ComponentVariantValue>,
): ComponentNode {
  const candidates = COMPONENT_NAME_ALIASES[componentName] || [componentName];
  for (const candidate of candidates) {
    const set = registry.sets.get(candidate);
    if (set) {
      const variantChildren = set.children.filter((child): child is ComponentNode => child.type === "COMPONENT");
      const exactVariant = variantChildren.find((child) => {
        if (!variants || Object.keys(variants).length === 0) {
          return true;
        }

        const variantProps = child.variantProperties ?? {};
        return Object.entries(variants).every(([key, value]) => {
          const matchedKey = Object.keys(variantProps).find(
            (propKey) => normalizeRef(propKey) === normalizeRef(key),
          );
          if (!matchedKey) {
            return false;
          }
          return normalizeRef(String(variantProps[matchedKey])) === normalizeRef(String(value));
        });
      });

      if (exactVariant) {
        return exactVariant;
      }

      if (variantChildren.length > 0) {
        console.warn(`[Design Agent] Variant not found for component set "${candidate}", fallback to first variant`, variants);
        return variantChildren[0];
      }
    }

    const component = registry.components.get(candidate);
    if (component) {
      return component;
    }
  }

  const availableNames = [...registry.sets.keys(), ...registry.components.keys()];
  const related = availableNames.filter((name) => normalizeRef(name).includes(normalizeRef(componentName))).slice(0, 10);
  throw new Error(`[${BUILD_ID}] Component not found in document: ${componentName}${related.length ? `; similar: ${related.join(", ")}` : ""}`);
}

function findTemplateNode(registry: ComponentRegistry, componentName: string): SceneNode | null {
  const candidates = COMPONENT_NAME_ALIASES[componentName] || [componentName];
  const matches: SceneNode[] = [];
  for (const candidate of candidates) {
    const exact = registry.templates.get(candidate);
    if (exact) {
      matches.push(exact);
    }
  }

  for (const candidate of candidates) {
    for (const [name, node] of registry.templates) {
      if (normalizeRef(name) === normalizeRef(candidate)) {
        matches.push(node);
      }
    }
  }

  for (const candidate of candidates) {
    const normalizedCandidate = normalizeRef(candidate);
    for (const [name, node] of registry.templates) {
      const normalizedName = normalizeRef(name);
      if (
        normalizedName.includes(normalizedCandidate) ||
        normalizedCandidate.includes(normalizedName)
      ) {
        matches.push(node);
      }
    }
  }

  if (matches.length === 0) {
    return null;
  }

  matches.sort((a, b) => templateScore(b) - templateScore(a));
  return matches[0];
}

async function createComponentInstance(
  registry: ComponentRegistry,
  componentName: string,
  variants?: Record<string, ComponentVariantValue>,
): Promise<InstanceNode> {
  const component = findVariantComponent(registry, componentName, variants);
  const instance = component.createInstance();
  await loadNodeFonts(instance);
  return instance;
}

async function createReusableNode(
  registry: ComponentRegistry,
  componentName: string,
  variants?: Record<string, ComponentVariantValue>,
): Promise<SceneNode> {
  try {
    return await createComponentInstance(registry, componentName, variants);
  } catch (error) {
    const template = findTemplateNode(registry, componentName);
    if (!template) {
      throw error;
    }
    const clone = template.clone();
    if ("children" in clone) {
      await loadNodeFonts(clone);
    }
    return clone;
  }
}

function trySetVariantProperties(instance: InstanceNode, variants: Record<string, ComponentVariantValue>): void {
  const available = instance.componentProperties;
  const patch: Record<string, string | boolean> = {};

  for (const [targetName, targetValue] of Object.entries(variants)) {
    const propertyName = Object.keys(available).find(
      (currentName) => normalizeRef(currentName.split("#")[0]) === normalizeRef(targetName),
    );
    if (propertyName) {
      patch[propertyName] = targetValue;
    }
  }

  if (Object.keys(patch).length > 0) {
    instance.setProperties(patch);
  }
}

async function tryApplyTextOverrides(instance: InstanceNode, values: string[]): Promise<void> {
  const texts = instance.findAll((node) => node.type === "TEXT") as TextNode[];
  for (let index = 0; index < texts.length && index < values.length; index += 1) {
    const text = texts[index];
    const value = values[index];
    if (!value) {
      continue;
    }
    const fontName = text.fontName;
    if (fontName !== figma.mixed) {
      await figma.loadFontAsync(fontName);
    }
    text.characters = value;
  }
}

async function buildPageHeader(node: SchemaNode, vars: ExactVars): Promise<FrameNode> {
  const header = createAutoLayoutFrame("PageHeader", "VERTICAL");
  const title = await createTextNode(node.title || node.label || "Heading", "heading.h4", bindPaint(vars.textPrimary));
  header.appendChild(title);
  return header;
}

function createCardSection(name: string, vars: ExactVars, width: number): FrameNode {
  const section = createAutoLayoutFrame(name, "VERTICAL");
  setFixedFrameWidth(section, width);
  section.itemSpacing = 24;
  section.clipsContent = true;
  section.fills = bindPaint(vars.white);
  bindRadius(section, vars.radius16);
  bindNumber(section, "paddingLeft", vars.padding24);
  bindNumber(section, "paddingRight", vars.padding24);
  bindNumber(section, "paddingTop", vars.padding24);
  bindNumber(section, "paddingBottom", vars.padding24);
  return section;
}

async function buildFieldTitle(node: SchemaNode, vars: ExactVars): Promise<FrameNode> {
  const titleRow = createAutoLayoutFrame("title", "HORIZONTAL");
  titleRow.counterAxisAlignItems = "CENTER";
  titleRow.itemSpacing = 8;

  if (node.required) {
    const required = await createTextNode("*", "base.strong", bindPaint(vars.error));
    titleRow.appendChild(required);
  }

  const title = await createTextNode(node.label || node.title || node.type, "base.strong", bindPaint(vars.textPrimary));
  titleRow.appendChild(title);

  if (node.helperText) {
    const helper = await createTextNode(node.helperText, "base.default", bindPaint(vars.textTertiary));
    titleRow.appendChild(helper);
  }

  return titleRow;
}

async function buildBusinessField(
  node: SchemaNode,
  vars: ExactVars,
  registry: ComponentRegistry,
  componentName: string,
  variants?: Record<string, ComponentVariantValue>,
  textOverrides?: string[],
): Promise<FrameNode> {
  const resolvedWidth = getDefaultWidth(node);
  const wrap = createAutoLayoutFrame(node.type, "VERTICAL");
  wrap.itemSpacing = 8;
  wrap.layoutSizingHorizontal = resolvedWidth ? "FIXED" : "HUG";
  setWidth(wrap, resolvedWidth, node.minWidth);

  const title = await buildFieldTitle(node, vars);
  wrap.appendChild(title);

  const instance = await createComponentInstance(registry, componentName, variants);
  if (instance.type === "INSTANCE" && variants) {
    trySetVariantProperties(instance, variants);
  }
  if (textOverrides && textOverrides.length > 0) {
    await tryApplyTextOverrides(instance as InstanceNode, textOverrides);
  }
  wrap.appendChild(instance);
  if ("layoutSizingHorizontal" in instance) {
    instance.layoutSizingHorizontal = resolvedWidth ? "FIXED" : "FILL";
  }
  if ("resize" in instance && typeof resolvedWidth === "number") {
    instance.resize(resolvedWidth, instance.height);
  }
  if ("minWidth" in instance && typeof node.minWidth === "number") {
    instance.minWidth = node.minWidth;
  }

  return wrap;
}

async function buildFormInput(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const state = node.state
    || node.variant
    || (node.addonAfter ? "addonAfter" : "")
    || (node.addonBefore ? "addonBefore" : "")
    || "default";
  const text = node.placeholder || "Please input";
  const overrides = [text];
  if (node.addonBefore) {
    overrides.push(node.addonBefore);
  }
  if (node.addonAfter) {
    overrides.push(node.addonAfter);
  }
  return buildBusinessField(node, vars, registry, "Input", { State: state }, overrides);
}

async function buildFormSelect(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const state = node.state || "default";
  const text = node.placeholder || "Please select";
  return buildBusinessField(node, vars, registry, "Select", { State: state }, [text]);
}

async function buildFormPicker(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const range = node.range || "single";
  const pickerType = node.pickerType || "date";
  const text = node.placeholder || (pickerType === "time" ? "Select time" : "Select date");
  return buildBusinessField(node, vars, registry, "Picker", { Type: pickerType, Range: range }, [text]);
}

async function buildFormSwitch(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const checked = node.checked ?? false;
  const checkedChildren = node.checkedChildren || "default";
  return buildBusinessField(
    node,
    vars,
    registry,
    "Switch",
    { Type: checked ? "checked" : "unchecked", State: node.state || "default", checkedChildren },
  );
}

async function buildFormUpload(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const resolvedWidth = getDefaultWidth(node) ?? 296;
  const wrap = createAutoLayoutFrame(node.type, "VERTICAL");
  wrap.itemSpacing = 8;
  wrap.layoutSizingHorizontal = "FIXED";
  setWidth(wrap, resolvedWidth);

  const title = await buildFieldTitle(node, vars);
  wrap.appendChild(title);

  const uploadNode = await createReusableNode(registry, "Upload", { state: node.state || "default" });
  if ("layoutSizingHorizontal" in uploadNode) {
    uploadNode.layoutSizingHorizontal = "FIXED";
  }
  wrap.appendChild(uploadNode);
  return wrap;
}

async function buildFormTextArea(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const placeholder = node.placeholder || "Paragraph text";
  return buildBusinessField(node, vars, registry, "Input", { State: "text area" }, [placeholder]);
}

async function buildChoiceGroup(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const resolvedWidth = getDefaultWidth(node);
  const wrap = createAutoLayoutFrame(node.type, "VERTICAL");
  wrap.itemSpacing = 8;
  wrap.layoutSizingHorizontal = resolvedWidth ? "FIXED" : "HUG";
  setWidth(wrap, resolvedWidth, node.minWidth);
  wrap.appendChild(await buildFieldTitle(node, vars));

  const isCheckbox = (node.name || node.label || node.type).toLowerCase().includes("checkbox");
  const componentName = isCheckbox ? "InputCheckbox" : "InputRadio";
  const optionsRow = createAutoLayoutFrame("Options", "HORIZONTAL");
  optionsRow.itemSpacing = 16;

  const items = (node.props?.options as string | undefined)?.split(",").map((value) => value.trim()).filter(Boolean) ?? ["Option A", "Option B"];
  for (const item of items) {
    const option = createAutoLayoutFrame(item, "HORIZONTAL");
    option.counterAxisAlignItems = "CENTER";
    option.itemSpacing = 8;
    const variantRequest: Record<string, ComponentVariantValue> = componentName === "InputCheckbox"
      ? { state: "default", state2: "default" }
      : { type: "unchecked", state: "enable" };
    const instance = await createReusableNode(registry, componentName, variantRequest);
    if (instance.type === "INSTANCE") {
      trySetVariantProperties(instance, variantRequest);
    }
    option.appendChild(instance);
    option.appendChild(await createTextNode(item, "base.default", bindPaint(vars.textPrimary)));
    optionsRow.appendChild(option);
  }

  wrap.appendChild(optionsRow);
  return wrap;
}

async function buildNamedComponentField(
  node: SchemaNode,
  vars: ExactVars,
  registry: ComponentRegistry,
  componentName: string,
): Promise<FrameNode> {
  const instance = await createReusableNode(registry, componentName);
  if (instance.type === "FRAME") {
    const resolvedWidth = getDefaultWidth(node);
    instance.name = node.type;
    if (typeof resolvedWidth === "number") {
      setWidth(instance, resolvedWidth, node.minWidth);
    }
    return instance;
  }

  const resolvedWidth = getDefaultWidth(node);
  const wrap = createAutoLayoutFrame(node.type, "VERTICAL");
  wrap.itemSpacing = 8;
  wrap.layoutSizingHorizontal = resolvedWidth ? "FIXED" : "HUG";
  setWidth(wrap, resolvedWidth, node.minWidth);
  wrap.appendChild(await buildFieldTitle(node, vars));

  wrap.appendChild(instance);

  if ("layoutSizingHorizontal" in instance) {
    instance.layoutSizingHorizontal = resolvedWidth ? "FIXED" : "FILL";
  }
  if ("resize" in instance && typeof resolvedWidth === "number") {
    instance.resize(resolvedWidth, instance.height);
  }
  if ("minWidth" in instance && typeof node.minWidth === "number") {
    instance.minWidth = node.minWidth;
  }

  return wrap;
}

async function buildButton(node: SchemaNode, registry: ComponentRegistry): Promise<InstanceNode> {
  const style = node.variant || "default";
  const instance = await createComponentInstance(registry, "Button", { Style: style, State: node.state || "default", Size: "default" });
  trySetVariantProperties(instance, { Style: style, State: node.state || "default", Size: "default" });
  await tryApplyTextOverrides(instance, [node.label || node.title || "Button"]);
  return instance;
}

async function buildActionBar(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry, pageWidth: number): Promise<FrameNode> {
  const bar = createAutoLayoutFrame("FormActionBar", "HORIZONTAL");
  bar.counterAxisSizingMode = "FIXED";
  setFixedFrameWidth(bar, pageWidth);
  bar.resize(pageWidth, 64);
  bar.primaryAxisAlignItems = "MIN";
  bar.counterAxisAlignItems = "CENTER";
  bar.itemSpacing = 16;
  bindRadius(bar, vars.radius16);
  bar.fills = bindPaint(vars.white);
  bar.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: 22 / 255, g: 35 / 255, b: 61 / 255, a: 0.08 },
      offset: { x: 0, y: -4 },
      radius: 12,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
    },
  ];
  bindNumber(bar, "paddingLeft", vars.padding24);
  bindNumber(bar, "paddingRight", vars.padding24);

  for (const action of node.actions || []) {
    const button = await buildButton(action, registry);
    bar.appendChild(button);
  }

  return bar;
}

async function buildRow(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry, pageWidth: number): Promise<FrameNode> {
  const row = createAutoLayoutFrame(node.type, node.layout === "vertical" ? "VERTICAL" : "HORIZONTAL");
  setFixedFrameWidth(row, pageWidth);
  row.itemSpacing = node.gap ?? (row.layoutMode === "HORIZONTAL" ? 24 : 24);

  for (const child of node.children || []) {
    row.appendChild(await buildNode(child, vars, registry, pageWidth));
  }

  return row;
}

async function buildFormSection(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry, pageWidth: number): Promise<FrameNode> {
  const section = createCardSection("FormSection", vars, pageWidth - 48);

  if (node.title) {
    section.appendChild(await buildPageHeader({ type: "PageHeader", title: node.title }, vars));
  }

  for (const child of node.children || []) {
    section.appendChild(await buildNode(child, vars, registry, pageWidth));
  }

  return section;
}

async function buildFormContainer(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry, pageWidth: number): Promise<FrameNode> {
  const container = createAutoLayoutFrame(node.type, "VERTICAL");
  container.counterAxisSizingMode = "AUTO";
  setFixedFrameWidth(container, pageWidth);
  container.itemSpacing = 16;
  container.clipsContent = true;
  container.fills = bindPaint(vars.bgLayout);
  bindNumber(container, "paddingLeft", vars.padding24);
  bindNumber(container, "paddingRight", vars.padding24);
  bindNumber(container, "paddingTop", vars.paddingVerticalLg16);
  bindNumber(container, "paddingBottom", vars.padding24);

  for (const child of node.children || []) {
    container.appendChild(await buildNode(child, vars, registry, pageWidth));
  }

  return container;
}

async function buildPageRoot(node: SchemaNode, vars: ExactVars): Promise<FrameNode> {
  const pageWidth = node.width ?? 1664;
  const root = createAutoLayoutFrame(node.name || `Layout / Page / ${node.type}`, "VERTICAL");
  root.counterAxisSizingMode = "AUTO";
  setFixedFrameWidth(root, pageWidth);
  root.itemSpacing = 0;
  root.fills = bindPaint(vars.bgLayout);

  return root;
}

async function buildFilterBar(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry, pageWidth: number): Promise<FrameNode> {
  const bar = createCardSection("FilterBar", vars, pageWidth - 48);
  bar.itemSpacing = node.gap ?? 16;

  if (node.title) {
    bar.appendChild(await buildPageHeader({ type: "PageHeader", title: node.title }, vars));
  }

  for (const child of node.children || []) {
    bar.appendChild(await buildNode(child, vars, registry, pageWidth - 48));
  }

  return bar;
}

async function buildTableSection(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry, pageWidth: number): Promise<FrameNode> {
  const section = createCardSection("TableSection", vars, pageWidth - 48);
  section.itemSpacing = 16;

  if (node.title) {
    section.appendChild(await buildPageHeader({ type: "PageHeader", title: node.title }, vars));
  }

  for (const child of node.children || []) {
    section.appendChild(await buildNode(child, vars, registry, pageWidth - 48));
  }

  return section;
}

async function buildModalPage(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry): Promise<FrameNode> {
  const pageWidth = node.width ?? 720;
  const root = createAutoLayoutFrame(node.name || "Layout / Modal / Page", "VERTICAL");
  root.counterAxisSizingMode = "AUTO";
  setFixedFrameWidth(root, pageWidth);
  root.itemSpacing = 16;
  root.fills = bindPaint(vars.white);
  bindRadius(root, vars.radius16);
  bindNumber(root, "paddingLeft", vars.padding24);
  bindNumber(root, "paddingRight", vars.padding24);
  bindNumber(root, "paddingTop", vars.padding24);
  bindNumber(root, "paddingBottom", vars.padding24);

  if (node.title) {
    root.appendChild(await buildPageHeader({ type: "PageHeader", title: node.title }, vars));
  }

  for (const child of node.children || []) {
    root.appendChild(await buildNode(child, vars, registry, pageWidth));
  }

  return root;
}

async function buildNode(node: SchemaNode, vars: ExactVars, registry: ComponentRegistry, pageWidth: number): Promise<FrameNode> {
  switch (node.type) {
    case "FormPage":
    case "ListPage":
      return buildPageRoot(node, vars);
    case "ModalPage":
      return buildModalPage(node, vars, registry);
    case "FormContainer":
    case "ListContainer":
      return buildFormContainer(node, vars, registry, pageWidth);
    case "FormSection":
      return buildFormSection(node, vars, registry, pageWidth);
    case "FilterBar":
      return buildFilterBar(node, vars, registry, pageWidth);
    case "TableSection":
      return buildTableSection(node, vars, registry, pageWidth);
    case "PageHeader":
      return buildPageHeader(node, vars);
    case "Row":
    case "InputGroup":
    case "Form/UploadGroup":
    case "Form/TextAreaGroup":
      return buildRow(node, vars, registry, pageWidth);
    case "Form/Input":
      return buildFormInput(node, vars, registry);
    case "Form/Select":
      return buildFormSelect(node, vars, registry);
    case "Form/Picker":
      return buildFormPicker(node, vars, registry);
    case "Form/Switch":
      return buildFormSwitch(node, vars, registry);
    case "Form/Upload":
      return buildFormUpload(node, vars, registry);
    case "Form/TextArea":
      return buildFormTextArea(node, vars, registry);
    case "Form/ChoiceGroup":
      return buildChoiceGroup(node, vars, registry);
    case "Form/SelectableList":
      return buildNamedComponentField(node, vars, registry, "SelectableList");
    case "Form/EditableTable":
      return buildNamedComponentField(node, vars, registry, "EditableTable");
    case "Form/RichTextEditor":
      return buildNamedComponentField(node, vars, registry, "RichTextEditor");
    case "Form/MultiLangInput":
      return buildNamedComponentField(node, vars, registry, "MultiLangInput");
    case "Form/ScheduleBuilder":
      return buildNamedComponentField(node, vars, registry, "ScheduleBuilder");
    case "Button":
      return buildBusinessField(node, vars, registry, "Button", { Style: node.variant || "default", State: node.state || "default", Size: "default" }, [node.label || node.title || "Button"]);
    case "FormActionBar":
      return buildActionBar(node, vars, registry, pageWidth);
    default:
      throw new Error(`Unsupported schema node type: ${node.type}`);
  }
}

function collectSchemaIssues(node: SchemaNode, issues: string[], path = node.type): void {
  if (!node || typeof node !== "object") {
    issues.push(`Invalid node at ${path}`);
    return;
  }
  if (typeof node.type !== "string" || node.type.length === 0) {
    issues.push(`Missing node type at ${path}`);
    return;
  }
  if (!SUPPORTED_NODE_TYPES.has(node.type)) {
    issues.push(`Unsupported schema node type: ${node.type} at ${path}`);
  }
  if (node.children) {
    node.children.forEach((child, index) => collectSchemaIssues(child, issues, `${path}.children[${index}]`));
  }
  if (node.actions) {
    node.actions.forEach((child, index) => collectSchemaIssues(child, issues, `${path}.actions[${index}]`));
  }
}

function normalizeSchema(node: SchemaNode): SchemaNode {
  const normalizedType = NODE_TYPE_ALIASES[node.type] || NODE_TYPE_ALIASES[node.type.toLowerCase()] || node.type;
  const normalized: SchemaNode = {
    ...node,
    type: normalizedType,
  };

  if (node.type === "DatePicker" && !normalized.pickerType) {
    normalized.pickerType = "date";
  }

  if (node.type === "TimePicker" && !normalized.pickerType) {
    normalized.pickerType = "time";
  }

  if ((node.type === "DateRangePicker" || node.type === "daterangepicker") && !normalized.range) {
    normalized.range = "range";
    normalized.pickerType = "date";
  }

  if ((node.type === "TimeRangePicker" || node.type === "timerangepicker") && !normalized.range) {
    normalized.range = "range";
    normalized.pickerType = "time";
  }

  if (node.children) {
    normalized.children = node.children.map(normalizeSchema);
  }

  if (node.actions) {
    normalized.actions = node.actions.map(normalizeSchema);
  }

  return normalized;
}

function validateSchema(schema: SchemaNode): string[] {
  const issues: string[] = [];
  collectSchemaIssues(schema, issues);
  return issues;
}

function inferPageTypeFromImage(fileName: string, width: number, height: number, requested?: "auto" | "form" | "list" | "modal"): "form" | "list" | "modal" {
  if (requested && requested !== "auto") {
    return requested;
  }

  const normalizedName = fileName.trim().toLowerCase();
  if (/modal|dialog|popup|pop[-_\s]?up/.test(normalizedName)) {
    return "modal";
  }
  if (/list|table|grid|index|management|manage/.test(normalizedName)) {
    return "list";
  }
  if (/form|create|edit|new|detail|submit|approval/.test(normalizedName)) {
    return "form";
  }

  if (width <= 900 || (width / Math.max(height, 1)) < 1.15) {
    return "modal";
  }

  if (width >= 1400 && height <= 1200) {
    return "list";
  }

  return "form";
}

function buildStarterSchemaFromImage(pageType: "form" | "list" | "modal", fileName: string): SchemaNode {
  const baseName = fileName.replace(/\.[^.]+$/, "") || "Prototype";

  if (pageType === "list") {
    return normalizeSchema({
      type: "ListPage",
      name: `Layout / Page / ${baseName}`,
      width: 1664,
      children: [
        {
          type: "ListContainer",
          children: [
            {
              type: "FilterBar",
              title: "筛选条件",
              children: [
                {
                  type: "Row",
                  gap: 24,
                  children: [
                    { type: "Form/Input", label: "关键字", placeholder: "请输入关键字", width: 296 },
                    { type: "Form/Select", label: "状态", placeholder: "请选择状态", width: 296 },
                    { type: "Form/Picker", label: "创建时间", pickerType: "date", range: "range", placeholder: "选择日期区间", width: 296 },
                    { type: "Button", label: "查询", variant: "primary" },
                    { type: "Button", label: "重置", variant: "default" }
                  ]
                }
              ]
            },
            {
              type: "TableSection",
              title: "数据列表",
              children: [
                {
                  type: "Row",
                  gap: 16,
                  children: [
                    { type: "Button", label: "新建", variant: "primary" },
                    { type: "Button", label: "导出", variant: "default" }
                  ]
                },
                { type: "Form/EditableTable", label: "列表数据", width: 1568 }
              ]
            }
          ]
        }
      ]
    });
  }

  if (pageType === "modal") {
    return normalizeSchema({
      type: "ModalPage",
      name: `Layout / Modal / ${baseName}`,
      width: 720,
      title: "弹窗标题",
      children: [
        {
          type: "FormSection",
          title: "基础信息",
          children: [
            {
              type: "Row",
              gap: 24,
              children: [
                { type: "Form/Input", label: "名称", required: true, placeholder: "请输入名称", width: 296 },
                { type: "Form/Select", label: "类型", placeholder: "请选择类型", width: 296 }
              ]
            }
          ]
        },
        {
          type: "FormActionBar",
          actions: [
            { type: "Button", label: "确认", variant: "primary" },
            { type: "Button", label: "取消", variant: "default" }
          ]
        }
      ]
    });
  }

  return normalizeSchema({
    type: "FormPage",
    name: `Layout / Page / ${baseName}`,
    width: 1664,
    children: [
      {
        type: "FormContainer",
        children: [
          {
            type: "FormSection",
            title: "基础信息",
            children: [
              {
                type: "Row",
                gap: 24,
                children: [
                  { type: "Form/Input", label: "名称", required: true, placeholder: "请输入名称", width: 296 },
                  { type: "Form/Select", label: "类型", placeholder: "请选择类型", width: 296 },
                  { type: "Form/Picker", label: "生效日期", pickerType: "date", range: "single", placeholder: "选择日期", width: 192 }
                ]
              }
            ]
          },
          {
            type: "FormActionBar",
            actions: [
              { type: "Button", label: "提交", variant: "primary" },
              { type: "Button", label: "取消", variant: "default" }
            ]
          }
        ]
      }
    ]
  });
}

function buildSchemaFromImageAnalysis(
  pageType: "form" | "list" | "modal",
  fileName: string,
  analysis?: BootstrapFromImageMessage["analysis"],
): SchemaNode {
  const baseName = fileName.replace(/\.[^.]+$/, "") || "Prototype";
  const columns = Math.max(1, Math.min(3, analysis?.columns ?? (pageType === "modal" ? 2 : 3)));
  const sectionCount = Math.max(1, Math.min(3, analysis?.sectionCount ?? 1));
  const includeActionBar = analysis?.hasActionBar ?? true;
  const includeFilterBar = analysis?.hasFilterBar ?? pageType === "list";
  const includeTable = analysis?.hasTable ?? pageType === "list";

  if (pageType === "list") {
    const filters: SchemaNode[] = [
      { type: "Form/Input", label: "Keyword", placeholder: "Enter keyword", width: 296 },
      { type: "Form/Select", label: "Status", placeholder: "Select status", width: 296 },
    ];
    if (columns >= 3) {
      filters.push({ type: "Form/Picker", label: "Created Time", pickerType: "date", range: "range", placeholder: "Select date range", width: 296 });
    }
    filters.push({ type: "Button", label: "Search", variant: "primary" });
    filters.push({ type: "Button", label: "Reset", variant: "default" });

    return normalizeSchema({
      type: "ListPage",
      name: `Layout / Page / ${baseName}`,
      width: 1664,
      children: [
        {
          type: "ListContainer",
          children: [
            ...(includeFilterBar ? [{
              type: "FilterBar",
              title: "Filters",
              children: [{ type: "Row", gap: 24, children: filters }],
            }] : []),
            {
              type: "TableSection",
              title: "Data Table",
              children: [
                {
                  type: "Row",
                  gap: 16,
                  children: [
                    { type: "Button", label: "Create", variant: "primary" },
                    { type: "Button", label: "Export", variant: "default" },
                  ],
                },
                ...(includeTable ? [{ type: "Form/EditableTable", label: "Table Data", width: 1568 }] : []),
              ],
            },
          ],
        },
      ],
    });
  }

  if (pageType === "modal") {
    return normalizeSchema({
      type: "ModalPage",
      name: `Layout / Modal / ${baseName}`,
      width: 720,
      title: "Dialog Title",
      children: [
        {
          type: "FormSection",
          title: "Basic Info",
          children: [
            {
              type: "Row",
              gap: 24,
              children: [
                { type: "Form/Input", label: "Name", required: true, placeholder: "Enter name", width: 296 },
                ...(columns >= 2 ? [{ type: "Form/Select", label: "Type", placeholder: "Select type", width: 296 }] : []),
              ],
            },
          ],
        },
        ...(includeActionBar ? [{
          type: "FormActionBar",
          actions: [
            { type: "Button", label: "Confirm", variant: "primary" },
            { type: "Button", label: "Cancel", variant: "default" },
          ],
        }] : []),
      ],
    });
  }

  const sectionChildren: SchemaNode[] = [];
  const primaryRowChildren: SchemaNode[] = [
    { type: "Form/Input", label: "Name", required: true, placeholder: "Enter name", width: 296 },
  ];
  if (columns >= 2) {
    primaryRowChildren.push({ type: "Form/Select", label: "Type", placeholder: "Select type", width: 296 });
  }
  if (columns >= 3) {
    primaryRowChildren.push({ type: "Form/Picker", label: "Effective Date", pickerType: "date", range: "single", placeholder: "Select date", width: 192 });
  }
  sectionChildren.push({
    type: "Row",
    gap: 24,
    children: primaryRowChildren,
  });
  if (sectionCount >= 2) {
    sectionChildren.push({
      type: "Row",
      gap: 24,
      children: [
        { type: "Form/TextArea", label: "Description", placeholder: "Enter description", width: 504 },
        { type: "Form/Upload", label: "Attachment", helperText: "Upload reference", width: 296 },
      ],
    });
  }

  return normalizeSchema({
    type: "FormPage",
    name: `Layout / Page / ${baseName}`,
    width: 1664,
    children: [
      {
        type: "FormContainer",
        children: [
          {
            type: "FormSection",
            title: "Basic Info",
            children: sectionChildren,
          },
          ...(includeActionBar ? [{
            type: "FormActionBar",
            actions: [
              { type: "Button", label: "Submit", variant: "primary" },
              { type: "Button", label: "Cancel", variant: "default" },
            ],
          }] : []),
        ],
      },
    ],
  });
}

figma.ui.onmessage = async (msg: PluginMessage) => {
  if (msg.type !== "generate" && msg.type !== "validate" && msg.type !== "bootstrap-from-image") {
    return;
  }

  try {
    if (msg.type === "bootstrap-from-image") {
      const inferredType = msg.analysis?.pageType || inferPageTypeFromImage(msg.fileName, msg.width, msg.height, msg.pageType);
      const schema = buildSchemaFromImageAnalysis(inferredType, msg.fileName, msg.analysis);
      const issues = validateSchema(schema);
      if (issues.length > 0) {
        throw new Error(issues.slice(0, 12).join("\n"));
      }

      await ensureFonts();
      const vars = await resolveExactVariables();
      const registry = await buildComponentRegistry();

      const root = await buildNode(schema, vars, registry, schema.width ?? 1664);
      figma.currentPage.appendChild(root);
      const pageWidth = schema.width ?? 1664;
      if (schema.type === "FormPage" || schema.type === "ListPage") {
        for (const child of schema.children || []) {
          root.appendChild(await buildNode(child, vars, registry, pageWidth));
        }
      }

      root.x = Math.round(figma.viewport.center.x - root.width / 2);
      root.y = Math.round(figma.viewport.center.y - root.height / 2);
      figma.viewport.scrollAndZoomIntoView([root]);
      figma.notify(`[${BUILD_ID}] Bootstrapped ${inferredType} page from image analysis`);
      figma.ui.postMessage({
        type: "bootstrap-result",
        valid: true,
        inferredType,
        normalizedSchema: schema,
      });
      return;
    }

    const schema = normalizeSchema(msg.schema);
    const issues = validateSchema(schema);
    if (issues.length > 0) {
      throw new Error(issues.slice(0, 12).join("\n"));
    }
    if (msg.type === "validate") {
      figma.notify(`[${BUILD_ID}] Schema validation passed`);
      figma.ui.postMessage({ type: "validation-result", valid: true, normalizedSchema: schema });
      return;
    }
    await ensureFonts();
    const vars = await resolveExactVariables();
    const registry = await buildComponentRegistry();
    const root = await buildNode(schema, vars, registry, schema.width ?? 1664);
    figma.currentPage.appendChild(root);
    const pageWidth = schema.width ?? 1664;
    if (schema.type === "FormPage" || schema.type === "ListPage") {
      for (const child of schema.children || []) {
        root.appendChild(await buildNode(child, vars, registry, pageWidth));
      }
    }
    root.x = Math.round(figma.viewport.center.x - root.width / 2);
    root.y = Math.round(figma.viewport.center.y - root.height / 2);
    figma.viewport.scrollAndZoomIntoView([root]);
    figma.notify(`[${BUILD_ID}] Generated from component instances`);
    figma.ui.postMessage({ type: "generation-result", valid: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[Design Agent]", error);
    figma.notify(message.includes(BUILD_ID) ? message : `[${BUILD_ID}] ${message}`, { error: true });
    figma.ui.postMessage({ type: "validation-result", valid: false, error: message });
  }
};
