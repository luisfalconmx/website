const defaultTheme = require('tailwindcss/defaultTheme')
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#FF4B2B',
        secondary: '#FF416C',
        nightfall: '#0D0D0F',
        onyx: '#121214',
        smoke: '#CECECE',
        ghost: '#F8F8FF'
      }
    }
  }
}
export default config
