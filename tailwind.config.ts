import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        nightfall: '#080808',
        onyx: '#121212',
        iron: '#6c6d6e',
        smoke: '#CECECE',
        ghost: '#F8F8FF'
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#BD3F32',
              foreground: '#ffffff'
            },
            secondary: {
              DEFAULT: '#CB356B',
              foreground: '#ffffff'
            },
            focus: '#e11d48'
          }
        }
      }
    })
  ]
}
export default config
