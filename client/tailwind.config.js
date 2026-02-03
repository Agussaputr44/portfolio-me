/** @type {import('tailwindcss').Config} */
export default {
  // 1. INI WAJIB DI SINI (Paling Atas)
  darkMode: 'class', 

  // 2. Content
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 3. Theme
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },

  // 4. Plugins
  plugins: [],
}