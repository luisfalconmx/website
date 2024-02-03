const defaultTheme = require('tailwindcss/defaultTheme')
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#FF4B2B',
        secondary: '#FF416C',
        nightfall: '#080808',
        onyx: '#121212',
        iron: '#6c6d6e',
        smoke: '#CECECE',
        ghost: '#F8F8FF'
      }
    }
  }
}
export default config
