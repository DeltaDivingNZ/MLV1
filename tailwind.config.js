// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // pages & components in app/
    './components/**/*.{js,ts,jsx,tsx}', // if you have a separate components folder
  ],
  theme: {
    extend: {
      colors: {
        delta: { blue: '#006bb3', green: '#009957', dark: '#111827' },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
};
