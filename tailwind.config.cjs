/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/*.{js,ts,jsx,tsx,svelte}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      }
    }
  },
  plugins: []
}; 