const path = require("path")
const miniCssExcteractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHotPlugin = require("html-webpack-hot-plugin");
const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


let mode = 'development';
let target = "web";
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = "browserslist"
};



module.exports = {
    mode: mode,
    target: target,

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]",
        publicPath: ""
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(png|jpg|svg|webp)$/i,
                type: "asset",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: miniCssExcteractPlugin.loader,
                        options: {
                            publicPath: " "
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new miniCssExcteractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),

    ],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        publicPath: "",
        open: true,
        hot: true,
    }
}