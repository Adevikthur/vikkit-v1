import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Header } from './components/Header';
import { ComponentGallery } from './components/ComponentGallery';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ 
        minHeight: '100vh',
        background: '#fafbfc',
        fontFamily: theme.fonts.body 
      }}>
        <Header />
        <ComponentGallery />
      </div>
    </ThemeProvider>
  );
}

export default App;