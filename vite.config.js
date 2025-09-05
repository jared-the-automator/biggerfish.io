import { resolve } from 'path';
import { defineConfig } from 'vite';
import { glob } from 'glob';

// Automatically find all HTML files in the src directory
const htmlFiles = glob.sync('src/*.html').reduce((acc, file) => {
    const name = file.split('/').pop().split('.').shift();
    acc[name] = resolve(__dirname, file);
    return acc;
}, {});

export default defineConfig({
  root: 'src', // Set the project root to our 'src' folder
  build: {
    outDir: '../dist', // Output the optimized files to a 'dist' folder at the top level
    emptyOutDir: true, // Automatically clean the 'dist' folder before each build
    rollupOptions: {
      input: htmlFiles, // Tell Vite to process all of your HTML pages
    },
  },
});
