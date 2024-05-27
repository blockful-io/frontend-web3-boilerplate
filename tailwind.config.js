/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      secondaryColored: '#7FD1B9',
      primaryColored: '#E56399',
      lightBase: '#FFFFFF',
      darkBase: '#121525'
    },
  },
  plugins: [],
}
