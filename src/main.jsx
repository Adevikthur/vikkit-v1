// Main entry point for the Vikkit UI Components React application
// This file initializes the React app and mounts it to the DOM

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create and render the React application
createRoot(document.getElementById('root')).render(
  // StrictMode enables additional development checks and warnings
  // It helps identify potential problems in the application
  <StrictMode>
    {/* Main App component - the root of our component tree */}
    <App />
  </StrictMode>
);