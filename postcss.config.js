var plugins = [];

plugins.push(require('tailwindcss'));

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        require('autoprefixer')({
            grid: "autoplace"
        })
    );
}

module.exports = {
    plugins: plugins
}