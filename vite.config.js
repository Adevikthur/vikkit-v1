// Vite configuration file for the Vikkit UI Components project
// Vite is a modern build tool that provides fast development server and optimized builds

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export the Vite configuration
export default defineConfig({
  // Configure plugins for the build process
  plugins: [
    react(), // React plugin for Vite - enables JSX support and Fast Refresh
  ],
});
