var plugins = [];

plugins.push(require('tailwindcss'));
plugins.push(require('postcss-nested'));

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        require('autoprefixer')({
            grid: "autoplace"
        })
    );

    plugins.push(require('cssnano'));
}

module.exports = {
    plugins: plugins
};