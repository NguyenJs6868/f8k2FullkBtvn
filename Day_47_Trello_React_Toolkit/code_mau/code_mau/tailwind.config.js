/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: '#99999940',
        columnBackgroundColor: 'white',
      },
    },
  },
  plugins: [],
};
