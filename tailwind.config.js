/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'fcda69': '#FCDA69',
        'fcda69-100': '#FCEEB1',
        'fcda69-200': '#FCE49C',
        'fcda69-300': '#FCD088',
        'fcda69-400': '#FCC573',
        'fcda69-500': '#FCDA69', // Base color
        'fcda69-600': '#FCC05A',
        'fcda69-700': '#FCB74B',
        'fcda69-800': '#FCAE3C',
        'fcda69-900': '#FCA52D',
      },
    },
  },
  plugins: [],
}
