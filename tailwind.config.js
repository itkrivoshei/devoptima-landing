/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0A0811',
        'text-primary': '#EFF1F6',
        'text-secondary': '#BDC4D1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        title: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        card: '380px',
        section: '1180px',
      },
    },
  },
  plugins: [],
};
