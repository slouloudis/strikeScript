import type { Config } from 'tailwindcss'
// const defaultTheme = require('tailwindcss/defaultTheme');


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        iceland: ['var(--font-iceland)]'],
        lexend: ['var(--font-lexendDeca)]'],
        sixcaps: ['var(--font-six_caps)]'],
        condiment: ['var(--font-condiment)'],
      },
      backgroundImage: {
        'hero': `url('/background.png')`,
      },
    },
    colors: {
      'vDark-grey' : '#040404'  
    }
  },
  plugins: [],
}
export default config
