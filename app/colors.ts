/**
 * Color System - TypeScript Constants
 * 
 * Use these constants when you need to access colors in JavaScript/TypeScript
 * For CSS, prefer using CSS custom properties from globals.css
 */

export const colors = {
  // Main palette
  primary: '#1F1F1F',             // Text Primary (Dark)
  accent: '#7A9E9F',              // Accent Primary (Teal)
  background: '#FAF9F6',          // Background Primary
  calmAccent: '#6A8E8F',          // Accent Hover (Darker Teal)
  secondaryBg: '#F1F1EF',         // Background Secondary

  // Extended palette
  surface: '#FFFFFF',
  borderSubtle: '#E5E5E5',
  textSecondary: '#6B6B6B',
  textMuted: '#9A9A9A',
  textInverse: '#FFFFFF',
  highlightSoft: '#E8E1D9',
  accentLight: '#E6F0F0',

  // Interactive states
  primaryHover: '#333333',
  accentHover: '#6A8E8F',
  calmAccentHover: '#5A7E7F',

  // RGB values for use with opacity
  primaryRgb: '31, 31, 31',
  accentRgb: '122, 158, 159',
  backgroundRgb: '250, 249, 246',
  calmAccentRgb: '106, 142, 143',
  secondaryBgRgb: '241, 241, 239',
} as const;

export const semanticColors = {
  foreground: colors.primary,
  muted: colors.textMuted,
  border: colors.borderSubtle,
  card: colors.secondaryBg,
  cardForeground: colors.primary,
} as const;

// Utility functions for working with colors
export const withOpacity = (color: string, opacity: number): string => {
  const rgbValue = colors[color as keyof typeof colors];
  if (rgbValue && rgbValue.includes(',')) {
    return `rgba(${rgbValue}, ${opacity})`;
  }
  return color;
};

export const getCSSVariable = (colorName: string): string => {
  return `var(--${colorName.replace(/([A-Z])/g, '-$1').toLowerCase()})`;
};

// Color palette for design tools or documentation
export const colorPalette = [
  { name: 'Primary', hex: colors.primary, description: 'Text Primary (Dark)' },
  { name: 'Accent', hex: colors.accent, description: 'Accent Primary (Teal)' },
  { name: 'Background', hex: colors.background, description: 'Background Primary' },
  { name: 'Calm Accent', hex: colors.calmAccent, description: 'Accent Hover (Darker Teal)' },
  { name: 'Secondary BG', hex: colors.secondaryBg, description: 'Background Secondary' },
] as const;

export type ColorName = keyof typeof colors;
export type SemanticColorName = keyof typeof semanticColors;