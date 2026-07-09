/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Tsinghua Purple (清华紫) — brand primary ──────────────────────────
        primary: {
          50:  '#faf4fd',
          100: '#f3e4fa',
          200: '#e7c7f4',
          300: '#d49cea',
          400: '#bc6add',
          500: '#a23fcb',
          600: '#8a1eb0',
          700: '#6a0f8e',   // Tsinghua Purple — brand anchor
          800: '#52096e',
          900: '#3d0b52',
          950: '#26063a',
        },
        // ── Imperial Gold — energy / accent (BTCH warmth + Red Bull) ──────────
        gold: {
          50:  '#fdf9ec',
          100: '#faf0cc',
          200: '#f4df95',
          300: '#eec95c',
          400: '#e9b73a',
          500: '#dda92b',   // accent anchor
          600: '#c2891c',
          700: '#98651a',
          800: '#7d511c',
          900: '#6a441c',
        },
        // ── Cardinal — Stanford-grade "critical / high-yield" ─────────────────
        cardinal: {
          50:  '#fdf2f2',
          100: '#fbe0e0',
          400: '#d24545',
          500: '#b71c1c',
          600: '#8c1515',   // Stanford cardinal
          700: '#701010',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
          muted: 'rgb(var(--ink-muted) / <alpha-value>)',
        },
        surface:  'rgb(var(--surface) / <alpha-value>)',
        surface2: 'rgb(var(--surface-2) / <alpha-value>)',
        app:      'rgb(var(--app-bg) / <alpha-value>)',
        line:     'rgb(var(--line) / <alpha-value>)',
        pc: {
          teal:    '#0d9488',
          emerald: '#059669',
          amber:   '#d97706',
          red:     '#dc2626',
          indigo:  '#4f46e5',
          purple:  '#6a0f8e',
          orange:  '#ea580c',
          sky:     '#0284c7',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        serif:   ['"Source Serif 4"', 'Georgia', 'serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      screens: { xs: '375px' },
      boxShadow: {
        'card':   '0 1px 2px rgba(22,18,28,0.04), 0 4px 16px rgba(22,18,28,0.06)',
        'lift':   '0 8px 30px rgba(106,15,142,0.14)',
        'glow':   '0 0 0 1px rgba(221,169,43,0.4), 0 8px 24px rgba(106,15,142,0.22)',
        'hero':   '0 24px 60px -12px rgba(38,6,58,0.55)',
      },
      backgroundImage: {
        'tsinghua':      'linear-gradient(135deg, #3d0b52 0%, #6a0f8e 48%, #8a1eb0 100%)',
        'tsinghua-deep': 'linear-gradient(160deg, #26063a 0%, #4e0866 55%, #6a0f8e 100%)',
        'gold-sheen':    'linear-gradient(120deg, #dda92b 0%, #eec95c 50%, #c2891c 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.4s ease-out',
        'slide-up':   'slideUp 0.45s cubic-bezier(0.22,1,0.36,1)',
        'slide-up-2': 'slideUp 0.6s cubic-bezier(0.22,1,0.36,1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':    'shimmer 2.4s linear infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(18px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
    },
  },
  plugins: [],
}
