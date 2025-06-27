import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Header } from './components/Header';
import { ComponentGallery } from './components/ComponentGallery';

const THEME_KEY = 'theme';

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_KEY) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, themeMode);
  }, [themeMode]);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleTheme();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-[#fafbfc] dark:bg-black font-sans transition-colors duration-300">
        <Header />
        <ComponentGallery />
        {/* Floating Theme Toggle Button */}
        <button
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={themeMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          tabIndex={0}
          onClick={handleToggleTheme}
          onKeyDown={handleKeyDown}
        >
          {themeMode === 'light' ? (
            // Moon Icon (indicate switch to dark mode)
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" />
            </svg>
          ) : (
            // Sun Icon (indicate switch to light mode)
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
            </svg>
          )}
        </button>
      </div>
    </ThemeProvider>
  );
}

export default App;