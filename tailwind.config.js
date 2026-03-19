/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette: deep charcoal + fiery orange
        brand: {
          orange:  '#F97316',
          amber:   '#FB923C',
          dark:    '#111827',
          darker:  '#0A0F1A',
          card:    '#1A2235',
          border:  '#2A3550',
          muted:   '#6B7280',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0F1A 0%, #111827 50%, #1a1f2e 100%)',
        'card-gradient': 'linear-gradient(145deg, #1A2235, #111827)',
        'orange-glow':   'radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up':      'slideUp 0.6s ease-out',
        'fade-in':       'fadeIn 0.8s ease-out',
        'shimmer':       'shimmer 2s linear infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        slideUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      boxShadow: {
        'orange':     '0 0 30px rgba(249,115,22,0.25)',
        'orange-sm':  '0 0 15px rgba(249,115,22,0.15)',
        'card':       '0 4px 30px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 50px rgba(0,0,0,0.7)',
      },
    },
  },
  plugins: [],
};
