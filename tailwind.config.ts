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
      colors: {
        primary: '#1F78FF',
        ghost: '#f0f0f0',
        night: '#0a0a0a',
        divider: {
          soft: '#e6e6e6',
          hard: '#2d2d2d'
        }
      }
    }
  },
  plugins: []
}
export default config
