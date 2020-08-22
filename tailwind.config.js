module.exports = {
    theme: {
        extend: {
            
        }
    },
    variants: {},
    plugins: [
        require('tailwindcss-debug-screens')
    ],
    purge: [
        './public/**/*.html'
    ]
}