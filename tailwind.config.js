module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0A0811',
        'text-primary': '#EFF1F6',
        'text-secondary': '#BDC4D1',
        'hover-bg': '#243BB9',
        'hover-border': '#3F57DA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        title: ['Aeonik', 'sans-serif'],
      },
      maxWidth: {
        container: '1472px',
        card: '380px',
        section: '1220px',
      },
    },
  },
  plugins: [],
};
