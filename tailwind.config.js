/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeRed: "#d21d18",
        themeDarkRed: "#b81612",
        themeDeepRed: "#8a0e0b",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 50px -12px rgba(0, 0, 0, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        'glow': '0 0 25px rgba(255, 255, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
