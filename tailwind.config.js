
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-teal': '#00FFCC',
        'retro-purple': '#9933FF',
        'retro-blue': '#0066FF',
        'retro-pink': '#FF66CC',
        'retro-yellow': '#FFFF00',
        'retro-green': '#33FF33',
        'retro-gray': '#CCCCCC',
      },
      fontFamily: {
        'comic': ['"Comic Sans MS"', 'cursive'],
        'pixel': ['"Press Start 2P"', 'cursive'],
        'system': ['"MS Sans Serif"', 'Arial', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'stars': 'url("/images/stars.gif")',
        'rainbow': 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3)',
      },
    },
  },
  plugins: [],
}
