/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#159895',
      light: '#aaa',
      lighter: '#eee',
      dark: '#777',
      darker: '#222',
      link: '#8ab4f8',
    },
  },
  plugins: [],
};
