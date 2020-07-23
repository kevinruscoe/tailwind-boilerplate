if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer', {
                grid: "autoplace"
            }),
        ]
    }
}

module.exports = {
    plugins: [
        require('tailwindcss'),
    ]
}