import path from 'path';

export default {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" } 
        ]
    }
}