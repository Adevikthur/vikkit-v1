// Main App component for the Vikkit UI Components project
// This component manages the overall application layout, theme switching, and component composition

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Header } from './components/Header';
import { ComponentGallery } from './components/ComponentGallery';

// Local storage key for persisting theme preference
const THEME_KEY = 'theme';

// Styled component for the main application container
// Provides theme-aware background and responsive layout
const AppContainer = styled.div`
  min-height: 100vh; /* Full viewport height */
  background: #fafbfc; /* Light mode background */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; /* Consistent font stack */
  transition: background-color 0.3s ease; /* Smooth theme transitions */
  
  /* Dark mode styling */
  .dark & {
    background: #000000; /* Black background for dark mode */
  }
`;

// Styled component for the floating theme toggle button
// Positioned in bottom-right corner with theme-aware styling
const ThemeToggleButton = styled.button`
  position: fixed; /* Fixed positioning */
  bottom: 24px; /* Distance from bottom */
  right: 24px; /* Distance from right */
  z-index: 50; /* High z-index to stay on top */
  display: flex; /* Flexbox for centering content */
  align-items: center; /* Vertical centering */
  justify-content: center; /* Horizontal centering */
  width: 48px; /* Fixed width */
  height: 48px; /* Fixed height */
  border-radius: 50%; /* Circular shape */
  border: 1px solid #e5e7eb; /* Light border for light mode */
  background: #ffffff; /* White background for light mode */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: all 0.3s ease; /* Smooth transitions */
  cursor: pointer; /* Pointer cursor */
  
  /* Focus styles for accessibility */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  /* Hover effects */
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  /* Dark mode styling */
  .dark & {
    background: #374151; /* Grey background for dark mode */
    border-color: #4b5563; /* Darker border for dark mode */
    color: #ffffff; /* White text/icons for dark mode */
  }
  
  /* Icon styling */
  svg {
    width: 24px;
    height: 24px;
  }
`;

function App() {
  // Theme state management with localStorage persistence
  // Initialize theme from localStorage or default to 'light'
  const [themeMode, setThemeMode] = useState(() => {
    // Check if we're in a browser environment (not SSR)
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_KEY) || 'light';
    }
    return 'light';
  });

  // Effect to sync theme changes with DOM and localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Add or remove 'dark' class based on theme mode
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Persist theme preference to localStorage
    localStorage.setItem(THEME_KEY, themeMode);
  }, [themeMode]);

  // Handler for theme toggle button click
  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Handler for keyboard navigation (Enter or Space key)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleTheme();
    }
  };

  return (
    // Emotion ThemeProvider for consistent theming across components
    <ThemeProvider theme={theme}>
      {/* Main application container with responsive design and theme transitions */}
      <AppContainer>
        {/* Application header with navigation and branding */}
        <Header />
        
        {/* Main content area - component gallery */}
        <ComponentGallery />
        
        {/* Floating Theme Toggle Button - positioned in bottom-right corner */}
        <ThemeToggleButton
          aria-label={themeMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          tabIndex={0}
          onClick={handleToggleTheme}
          onKeyDown={handleKeyDown}
        >
          {themeMode === 'light' ? (
            // Moon Icon - indicates switching to dark mode
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor" />
            </svg>
          ) : (
            // Sun Icon - indicates switching to light mode (improved with better rays)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {/* Sun center circle */}
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              {/* Sun rays - perfectly aligned at 45-degree intervals */}
              <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              {/* Diagonal rays - perfectly symmetrical */}
              <line x1="4.5" y1="4.5" x2="6.5" y2="6.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              <line x1="17.5" y1="17.5" x2="19.5" y2="19.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              <line x1="4.5" y1="19.5" x2="6.5" y2="17.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              <line x1="17.5" y1="6.5" x2="19.5" y2="4.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            </svg>
          )}
        </ThemeToggleButton>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;