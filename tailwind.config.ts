import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF530F',
          navy: '#1C224E',
        },
        gray: {
          black: '#0B0D0F',
          white: '#FFFFFF',
          800: '#5B5C63',
          600: '#B5B9C4',
          500: '#CDD1DC',
          400: '#E4E5E9',
          300: '#F1F1F3',
          200: '#F7F8FA',
          100: '#F9FAFC',
        },
        text: {
          600: '#0B0D0F',
          500: '#5B5C63',
          400: '#868A93',
          300: '#B5B9C4',
          200: '#CDD1DC',
          100: '#FFFFFF',
        },
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        inter: ['var(--font-inter'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
