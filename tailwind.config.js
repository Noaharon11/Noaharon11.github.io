/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090F',
          900: '#0B0F19',
          800: '#111827',
          700: '#1A2233',
          600: '#273247',
        },
        band: '#4CC2B3',
        signal: '#F2668F',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      keyframes: {
        draw: { to: { strokeDashoffset: '0' } },
        pop: { to: { opacity: '1' } },
        rise: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        draw: 'draw 2.2s 0.3s ease-out forwards',
        pop: 'pop 0.5s 2.4s ease-out forwards',
        rise: 'rise 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
