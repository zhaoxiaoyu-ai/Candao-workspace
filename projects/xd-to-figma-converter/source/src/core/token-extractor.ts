import type { DesignTokenSet, XdNode } from "./types.js";

function visit(node: XdNode, nodes: XdNode[]): void {
  nodes.push(node);
  for (const child of node.children) {
    visit(child, nodes);
  }
}

export function extractDesignTokens(root: XdNode): DesignTokenSet {
  const nodes: XdNode[] = [];
  visit(root, nodes);

  const colorSet = new Set<string>();
  const typographyMap = new Map<string, DesignTokenSet["typography"][number]>();
  const spacingSet = new Set<number>();
  const radiusSet = new Set<number>();
  const effectSet = new Set<string>();

  for (const node of nodes) {
    const styles = node.styles;
    const layout = node.layout;

    if (!styles && !layout) {
      continue;
    }

    if (styles?.fill) {
      colorSet.add(styles.fill);
    }

    if (styles?.textColor) {
      colorSet.add(styles.textColor);
    }

    for (const stroke of styles?.strokes ?? []) {
      colorSet.add(stroke);
    }

    for (const effect of styles?.effects ?? []) {
      effectSet.add(effect);
    }

    if (typeof styles?.cornerRadius === "number") {
      radiusSet.add(styles.cornerRadius);
    }

    if (typeof layout?.itemSpacing === "number") {
      spacingSet.add(layout.itemSpacing);
    }

    for (const value of [layout?.paddingTop, layout?.paddingRight, layout?.paddingBottom, layout?.paddingLeft]) {
      if (typeof value === "number") {
        spacingSet.add(value);
      }
    }

    if (styles?.fontFamily && typeof styles.fontSize === "number") {
      const token = {
        fontFamily: styles.fontFamily,
        fontWeight: styles.fontWeight ?? "Regular",
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        letterSpacing: styles.letterSpacing
      };
      typographyMap.set(JSON.stringify(token), token);
    }
  }

  return {
    colors: [...colorSet].sort(),
    typography: [...typographyMap.values()].sort((left, right) =>
      `${left.fontFamily}-${left.fontWeight}-${left.fontSize}`.localeCompare(
        `${right.fontFamily}-${right.fontWeight}-${right.fontSize}`
      )
    ),
    spacing: [...spacingSet].sort((left, right) => left - right),
    radius: [...radiusSet].sort((left, right) => left - right),
    effects: [...effectSet].sort()
  };
}
