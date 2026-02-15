/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        // 1. Font Utama (Teks biasa, judul, paragraf) -> Pakai INTER
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        
      },
    },
  },

  plugins: [],
}