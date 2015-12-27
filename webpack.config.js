var webpack = require('webpack');

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:1111",
        "./src/main.js"
    ],
    output: {
        path: "./public",
        publicPath: "/public",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        hot: true,
        port: 1111
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ],
        plugins: [
            new webpack.NoErrorsPlugin()
        ]
    }
}
