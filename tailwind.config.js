/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    fontFamily: { sans: ['Inter','ui-sans-serif','system-ui','sans-serif'] },
    boxShadow: { soft: '0 10px 30px -10px rgba(0,0,0,0.25)' }
  }},
  plugins: [],
};
