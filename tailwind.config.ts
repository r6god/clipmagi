import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: { DEFAULT:'#0A0E12', 2:'#12141E' }, cyan:{ brand:'#00E5FF' } },
      boxShadow: { glow: '0 0 40px rgba(0,229,255,0.25)' },
      borderRadius: { '2xl':'1.25rem' },
    },
  },
  plugins: [],
}
export default config
