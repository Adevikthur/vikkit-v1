import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme';
import '../src/index.css';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div style={{ 
        padding: '20px',
        background: '#fafbfc',
        fontFamily: theme.fonts.body 
      }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};