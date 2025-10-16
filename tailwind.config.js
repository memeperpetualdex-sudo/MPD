/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e1a',
        foreground: '#ffffff',
        card: '#0f1420',
        'card-hover': '#151925',
        border: '#1e2433',
        primary: '#00d4aa',
        'primary-hover': '#00bf99',
        danger: '#ff4757',
        success: '#00d4aa',
        warning: '#ffa502',
      },
    },
  },
  plugins: [],
}
