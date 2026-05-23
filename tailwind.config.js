/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#080B14',
        surface: '#101827',
        'surface-soft': '#111D2F',
        border: 'rgba(148, 163, 184, 0.18)',
        muted: '#94A3B8',
        accent: '#3B82F6',
        'accent-strong': '#60A5FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.45)',
      },
    },
  },
  plugins: [],
};
