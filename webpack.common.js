const path = require('path');

module.exports = {    
    entry: ['./src/index.js'], 
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-class-properties']
            }
        }]
    },
}