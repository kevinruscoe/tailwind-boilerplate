module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [
    './public/**/*.html'
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