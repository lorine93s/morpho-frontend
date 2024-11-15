import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
        audiowide: ['var(--font-audiowide)']
      },
      fontSize: {
        'h1-term': '64px',
        'h2-term': '32px'
      },
      margin: {
        'h2-term': '16px',
        'p-term': '16px'
      },
      colors: {
        'h1-term': 'white',
        'h2-term': 'white',
        'p-term': 'white'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
