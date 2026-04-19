/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'DM Serif Display'", 'serif'],
        sans: ["'DM Sans'", 'sans-serif'],
      },
      colors: {
        brand: {
          'off-white': '#FBFBFB',
          'light-blue': '#E8F9FF',
          'medium-blue': '#C4D9FF',
          'soft-purple': '#C5BAFF',
          'dark': '#1A1A2E',
          'dark-alt': '#2C2C4A',
          'text-muted': '#5A5A7A',
        },
      },
    },
  },
  plugins: [],
}

