import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        b: {
          orange: '#FF530F',
          navy: '#1C224E',
        },
        g: {
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
        t: {
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
      fontSize: {
        H1_30_Bold: [
          '1.875rem', //30px
          {
            fontWeight: 700,
            letterSpacing: '-0.003em',
            lineHeight: '2.25rem', //36px
          },
        ],
        H2_26_Bold: [
          '1.625rem', // 26px
          {
            fontWeight: 700,
            lineHeight: '2rem', // 32px
          },
        ],
        H3_24_Bold: [
          '1.5rem', // 24px
          {
            fontWeight: 700,
            lineHeight: '1.875rem', //30px
          },
        ],
        H4_22_Bold: [
          '1.375rem', //22px
          {
            fontWeight: 700,
            lineHeight: '1.75rem', // 28px
          },
        ],
        H5_20_Bold: [
          '1.25rem', //20px
          {
            fontWeight: 700,
            lineHeight: '1.625rem', //26px
          },
        ],
        H6_18_Bold: [
          '1.125rem', //18px
          {
            fontWeight: 700,
            lineHeight: '1.5rem', //24px
          },
        ],
        B1_18_Regular: [
          '1.125rem', //18px
          {
            fontWeight: 400,
            lineHeight: '1.5rem', //24px
          },
        ],
        B2_15_Regular: [
          '1rem', //16px
          {
            fontWeight: 400,
            lineHeight: '1.375rem', //22px
          },
        ],
        B3_14_Regular: [
          '0.875rem', //14px
          {
            fontWeight: 400,
            lineHeight: '1.25rem', //20px
          },
        ],
        B4_12_Regular: [
          '0.75rem', //12px
          {
            fontWeight: 400,
            lineHeight: '1.125rem', //18px
          },
        ],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
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
