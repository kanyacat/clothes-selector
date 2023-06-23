const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const GLOBAL_CSS_REGEXP = /\.global\.css$/;


module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["style-loader", "css-loader"],
            },,
            { test:  /\.js$|jsx/, use: 'babel-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    // devServer: {
    //     historyApiFallback: true,
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'template.html'),
            filename: 'index.html',
        })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}