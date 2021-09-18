const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const tsImportPluginFactory = require('ts-import-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'prod';

const appDirectory = fs.realpathSync(process.cwd());
const isProductionMode = NODE_ENV !== 'development';
const themeLessFileName = path.resolve(appDirectory, 'theme', 'theme.less');
const webpackMode = isProductionMode ? 'production' : 'development';
const localIdentName = isProductionMode ? '[hash:base64]' : '[path][name]__[local]';
const isBundleAnalyzerPlugin = false;

const lessLoader = {
    loader: 'less-loader',
    options: {
        modifyVars: {
            'hack': `true; @import "${themeLessFileName}";`,
        },
        javascriptEnabled: true,
    },
};

const fontsOptions = isProductionMode
    ? {
        name: '[name].[hash:8].[ext]',
        outputPath: 'static/media/fonts',
        publicPath: '../media/fonts',
        useRelativePaths: true,
    }
    : { name: 'static/media/fonts/[name].[hash:8].[ext]' };

const cssLoaders = extra => {
    const loaders = [
        {
            loader: isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName,
                    exportLocalsConvention: 'camelCase',
                    auto: resourcePath => resourcePath.endsWith('.module.less'),
                },
            },
        },
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

const plugins = () => {
    const pluginsList = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
            chunksSortMode: 'auto',
            env: {
                production: isProductionMode,
            },
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[fullhash:8].css',
            ignoreOrder: true,
        }),
    ];

    if (isBundleAnalyzerPlugin) {
        pluginsList.push(new BundleAnalyzerPlugin());
    }

    return pluginsList;
};

module.exports = {
    entry: './src/index.tsx',
    target: 'web',
    mode: webpackMode,
    devtool: isProductionMode ? undefined : 'inline-source-map',
    optimization: {
        minimize: isProductionMode,
        splitChunks: {
            chunks: 'all',
            minChunks: 2,
        },
        minimizer: isProductionMode ? [new TerserPlugin(), new CssMinimizerPlugin()] : undefined,
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: [
                                tsImportPluginFactory([
                                    {
                                        style: false,
                                        libraryName: 'lodash',
                                        libraryDirectory: null,
                                        camel2DashComponentName: false,
                                    }
                                ])
                            ]
                        })
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.less$/,
                use: cssLoaders(lessLoader),
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    fallback: 'file-loader',
                    name: 'static/media/img/[name].[hash:8].[ext]',
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: fontsOptions,
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgo: false,
                        },
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/media/svg/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(appDirectory, './src'),
            '@img': path.resolve(appDirectory, './src/img'),
            '@hooks': path.resolve(appDirectory, './src/hooks'),
            '@icons': path.resolve(appDirectory, './src/icons')
        },
    },
    output: {
        filename: isProductionMode ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
        chunkFilename: isProductionMode ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
        path: path.resolve(appDirectory, 'build'),
    },
    plugins: plugins(),
}