/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sk: { red:'#E2231A', orange:'#F05A22', gold:'#FFB000' },
      },
      backgroundImage: {
        'sk-grad': 'linear-gradient(135deg,#E2231A 0%,#F05A22 45%,#FFB000 100%)',
      },
    },
  },
  plugins: [],
}