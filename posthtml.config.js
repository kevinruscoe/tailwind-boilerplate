var plugins = [];

plugins.push(
    require('posthtml-include')({
        root: __dirname + '/src',
    })
);

module.exports = {
    plugins: plugins
};