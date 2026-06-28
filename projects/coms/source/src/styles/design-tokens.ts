/**
 * COMS 8.0 设计令牌
 * 从 Figma 设计系统提取 (26.0304_COMS-8.0_v2)
 */

// ============================================================
// 颜色 (Colors)
// ============================================================

export const colors = {
  // 品牌色 (Brand)
  brand: {
    primary: '#528DFF',
    primaryHover: '#70A4FF',
    primaryActive: '#3363D2',
    primaryBgHover: '#CAE3FF',
  },

  // 语义色 (Semantic)
  semantic: {
    error: '#FF4040',
    errorHover: '#FF8B83',
    errorActive: '#DD282D',
    warning: '#FC8E17',
  },

  // 中性色 - 文本 (Neutral Text)
  text: {
    primary: '#16233DF2',     // 95% 不透明度
    secondary: '#16233DA6',   // 65% 不透明度
    tertiary: '#16233D73',    // 45% 不透明度
    quaternary: '#16233D4D',  // 30% 不透明度
    disabled: '#16233D4D',
  },

  // 中性色 - 边框 (Neutral Border)
  border: {
    default: '#16233D26',     // 15% 不透明度
    secondary: '#16233D14',   // 8% 不透明度
  },

  // 中性色 - 填充 (Neutral Fill)
  fill: {
    default: '#16233D26',     // 15% 不透明度
    secondary: '#16233D0F',   // 6% 不透明度
    tertiary: '#16233D0A',    // 4% 不透明度
    quaternary: '#16233D05',  // 2% 不透明度
  },

  // 中性色 - 背景 (Neutral Background)
  background: {
    container: '#FFFFFF',
    containerDisabled: '#16233D0A',
  },

  // 基础色
  white: '#FFFFFF',
} as const

// ============================================================
// 字体 (Typography)
// ============================================================

export const typography = {
  fontFamily: {
    code: 'Roboto',
    base: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  },

  fontSize: {
    sm: 12,
    base: 14,
    lg: 16,
    iconLg: 24,
    iconExtraLg: 32,
  },

  fontWeight: {
    regular: 400,
    semibold: 600,
  },

  lineHeight: {
    sm: 20,
    base: 22,
    lg: 24,
  },
} as const

// 预设字体样式组合
export const textStyles = {
  sm: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    lineHeight: `${typography.lineHeight.sm}px`,
  },
  base: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    lineHeight: `${typography.lineHeight.base}px`,
  },
  lg: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.regular,
    lineHeight: `${typography.lineHeight.lg}px`,
  },
  smStrong: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: `${typography.lineHeight.sm}px`,
  },
  baseStrong: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: `${typography.lineHeight.base}px`,
  },
  lgStrong: {
    fontFamily: typography.fontFamily.base,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: `${typography.lineHeight.lg}px`,
  },
} as const

// ============================================================
// 间距 (Spacing) - 遵循 Tailwind 约定
// ============================================================

export const spacing = {
  xxs: 4,   // padding-1
  xs: 8,    // padding-2
  sm: 12,   // padding-3
  base: 16, // padding-4
} as const

export const margin = {
  xs: 8,
} as const

export const padding = {
  xxs: 4,
  contentHorizontalSm: 8,
  contentVerticalSm: 8,
  sm: 12,
  contentVertical: 12,
  contentHorizontal: 16,
} as const

// ============================================================
// 圆角 (Border Radius)
// ============================================================

export const borderRadius = {
  sm: 4,
  base: 8,
  lg: 16,
} as const

// ============================================================
// 控件高度 (Control Heights)
// ============================================================

export const controlHeight = {
  sm: 24,
  md: 32,
  base: 40,
  lg: 48,
} as const

// ============================================================
// 阴影 (Shadows)
// ============================================================

export const shadows = {
  sm: '0 1px 2px 0 rgba(22, 35, 61, 0.05)',
  base: '0 2px 4px 0 rgba(22, 35, 61, 0.08)',
  md: '0 4px 8px 0 rgba(22, 35, 61, 0.08)',
  lg: '0 8px 16px 0 rgba(22, 35, 61, 0.08)',
  xl: '0 16px 32px 0 rgba(22, 35, 61, 0.12)',
} as const

// ============================================================
// 描边 (Outline)
// ============================================================

export const outline = {
  width: 1,
} as const

// ============================================================
// 断点 (Breakpoints)
// ============================================================

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// ============================================================
// 导出完整令牌对象
// ============================================================

export const designTokens = {
  colors,
  typography,
  textStyles,
  spacing,
  margin,
  padding,
  borderRadius,
  controlHeight,
  shadows,
  outline,
  breakpoints,
} as const

export type DesignTokens = typeof designTokens
export default designTokens
