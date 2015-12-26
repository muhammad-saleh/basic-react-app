module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./public",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 1111
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    }
}
