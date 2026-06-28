export const tappoTokens = {
  color: {
    primary: '#ff8a3d',
    primaryHover: '#ffa764',
    primaryActive: '#db6a2e',
    primaryLight: '#fff9f1',
    primaryBorder: '#ffedd8',
    appBg: '#fffbf6',
    surface: '#ffffff',
    subtle: '#f8f8f8',
    border: '#f5f5f4',
    textPrimary: 'rgba(9, 5, 2, 0.95)',
    textSecondary: 'rgba(9, 5, 2, 0.65)',
    textTertiary: 'rgba(9, 5, 2, 0.45)',
    textDisabled: 'rgba(9, 5, 2, 0.30)',
    hairline: 'rgba(9, 5, 2, 0.08)',
    success: '#32b963',
    error: '#ff4040',
    urgent: '#f83b00',
    warning: '#fc8e17',
    info: '#3b82f6',
  },
  radius: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    full: '999px',
  },
  shadow: {
    low: '0 2px 8px rgba(9, 5, 2, 0.08)',
    card: '0 4px 20px rgba(229, 215, 204, 0.40)',
    modal: '0 4px 24px rgba(0, 0, 0, 0.16)',
    bottom: '0 -2px 12px rgba(51, 51, 51, 0.08)',
  },
  viewport: {
    primaryWidth: 402,
    primaryHeight: 874,
    padBreakpoint: 768,
  },
} as const

export type TappoTokens = typeof tappoTokens
