import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDeep: '#050505',
        panel: 'rgba(15, 23, 42, 0.6)',
        neonCyan: '#00f0ff',
        neonCrimson: '#ff003c',
        vuln: {
          critical: '#ff003c',
          high: '#ff8a00',
          medium: '#fcee0a',
          low: '#00f0ff',
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
} satisfies Config;