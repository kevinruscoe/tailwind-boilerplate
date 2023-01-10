module.exports = {
  content: [
    './public/**/*.{php,html}',
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        "header": ['"Sansation"', 'sans-serif'],
        "body": ['"Hind Siliguri"', 'sans-serif'],
        "libre": ['"Libre Baskerville"']
      },
      colors: {
        theme: {
          teal: "#73c9c4",
          gray: {
            DEFAULT: "#808182",
            light: '#e7e7e7',
            dark: '#222222'
          }
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
