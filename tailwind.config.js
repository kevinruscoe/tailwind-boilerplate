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
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-debug-screens')
  ]
};