import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#00b894',
          blue: '#0984e3',
          gray: '#dfe6e9',
        },
        eco: {
          green: '#00b894',
          blue: '#0984e3',
          light: '#dfe6e9',
          dark: '#2d3436',
        },
      },
      borderRadius: {
        'xl': '12px',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config

