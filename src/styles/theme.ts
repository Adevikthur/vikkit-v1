// TypeScript theme configuration for the Vikkit UI Components project
// Defines the design system including colors, typography, spacing, and shadows
// This file provides type safety for theme usage in TypeScript components

export const theme = {
  // Color palette for consistent theming across components
  colors: {
    primary: '#000000', // Primary brand color - black
    secondary: '#333333', // Secondary color - dark gray
    accent: '#6366f1', // Accent color - indigo for highlights and CTAs
    success: '#10b981', // Success state color - green
    warning: '#f59e0b', // Warning state color - amber
    error: '#ef4444', // Error state color - red
    background: '#ffffff', // Main background color - white
    surface: '#f8fafc', // Surface background color - very light gray
    border: '#e2e8f0', // Border color - light gray
    text: '#1e293b', // Primary text color - dark slate
    textSecondary: '#64748b', // Secondary text color - medium slate
    textMuted: '#94a3b8', // Muted text color - light slate
    code: '#0f172a', // Code text color - very dark slate
    codeBackground: '#f1f5f9' // Code background color - light gray
  },
  
  // Typography configuration for consistent font usage
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", // Primary body font
    mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace" // Monospace font for code
  },
  
  // Spacing scale for consistent layout spacing
  spacing: {
    xs: '4px', // Extra small spacing
    sm: '8px', // Small spacing
    md: '16px', // Medium spacing
    lg: '24px', // Large spacing
    xl: '32px', // Extra large spacing
    xxl: '48px' // Double extra large spacing
  },
  
  // Border radius values for consistent corner rounding
  borderRadius: {
    sm: '6px', // Small border radius
    md: '8px', // Medium border radius
    lg: '12px', // Large border radius
    xl: '16px' // Extra large border radius
  },
  
  // Shadow definitions for consistent depth and elevation
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Small shadow for subtle elevation
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Medium shadow for cards
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Large shadow for modals
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' // Extra large shadow for dropdowns
  }
};

// TypeScript type definition for the theme object
// Provides type safety when using theme values in components
export type Theme = typeof theme;