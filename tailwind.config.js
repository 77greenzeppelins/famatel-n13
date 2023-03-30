/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  //___ https://levelup.gitconnected.com/using-material-ui-with-next-js-13-and-tailwind-css-41c201855dcf
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxs: '300px',
      xs3xx: '358px',
      xs4xx: '400px',
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1792px',
    },
    extend: {
      colors: {
        corpo: 'var(--corpo-orange)',
        grey: 'var(--corpo-grey)',
        greyTint1: 'var(--corpo-grey-tint-1)',
        greyTint2: 'var(--corpo-grey-tint-2)',
        greyShade1: 'var(--corpo-grey-shade-1)',
        greyShade2: 'var(--corpo-grey-shade-2)',
        dark: 'var(--corpo-dark)',
        light: 'var(--light)',
        vY: 'var(--vYellow)',
        vtY: 'var(--vTintYellow)',
        vR: 'var(--vRed)',
        vtR: 'var(--vTintRed)',
        vB: 'var(--vBlue)',
        vtB: 'var(--vTintBlue)',
        vD: 'var(--vDark)',
        vtD: 'var(--vDarkTint)',
        vV: 'var(--vViolet)',
        vmV: 'var(--vModViolet)',
        vG: 'var(--vGreen)',
        vmG: 'var(--vModGreen)',
        vmL: 'var(--vModLight)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 4s  infinite',
      },
    },
  },
  plugins: [],
};
