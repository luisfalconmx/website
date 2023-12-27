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
        nightfall: '#0D0D0F',
        onyx: '#121214',
        smoke: '#E1E1E1',
        ghost: '#F8F8FF',
        primary: '#F03939',
        secondary: '#D833F3'
      }
    }
  }
}
export default config
