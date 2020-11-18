module.exports = {
  purge: [
    './src/**/*.html'
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-debug-screens')
  ]
};
