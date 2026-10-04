/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#111111',
        dark: '#111111',
        muted: '#9E9E96',
        lime: {
          DEFAULT: '#B6FF00',
          hover: '#A3E600',
          light: 'rgba(182, 255, 0, 0.15)',
        },
        card: '#161616',
        borderWarm: '#282828',
        surfaceDark: '#1A1A1A',
        cardDark: '#141414',
        pageBg: '#111111',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'card': '0 4px 25px -2px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 10px 35px -5px rgba(182, 255, 0, 0.2)',
        'lime-glow': '0 0 25px rgba(182, 255, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
