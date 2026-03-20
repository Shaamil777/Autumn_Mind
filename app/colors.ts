/**
 * Autumn Color System - TypeScript Constants
 * 
 * Use these constants when you need to access colors in JavaScript/TypeScript
 * For CSS, prefer using CSS custom properties from globals.css
 */

export const colors = {
  // Main palette
  primary: '#4A2F27',           // Deep Autumn Brown
  accent: '#C65D2E',            // Burnt Orange
  background: '#F5EFE6',        // Soft Cream
  calmAccent: '#8A9A5B',        // Sage Green
  secondaryBg: '#D8C3A5',       // Warm Sand

  // Interactive states
  primaryHover: '#3A251F',
  accentHover: '#B5532A',
  calmAccentHover: '#7A8A51',

  // RGB values for use with opacity
  primaryRgb: '74, 47, 39',
  accentRgb: '198, 93, 46',
  backgroundRgb: '245, 239, 230',
  calmAccentRgb: '138, 154, 91',
  secondaryBgRgb: '216, 195, 165',
} as const;

export const semanticColors = {
  foreground: colors.primary,
  muted: colors.calmAccent,
  border: colors.secondaryBg,
  card: colors.background,
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
  { name: 'Primary', hex: colors.primary, description: 'Deep Autumn Brown' },
  { name: 'Accent', hex: colors.accent, description: 'Burnt Orange' },
  { name: 'Background', hex: colors.background, description: 'Soft Cream' },
  { name: 'Calm Accent', hex: colors.calmAccent, description: 'Sage Green' },
  { name: 'Secondary BG', hex: colors.secondaryBg, description: 'Warm Sand' },
] as const;

export type ColorName = keyof typeof colors;
export type SemanticColorName = keyof typeof semanticColors;