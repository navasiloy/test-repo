const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProd = (process.env.NODE_ENV === 'prod');

const settings = module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate!babel'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'postcss-loader', 'less']
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff2?$|\.ttf$|\.wav$|\.mp3$|\.eot$|\.json$/,
                loader: "file"
            }
        ]
    },
    plugins: [
        new webpack.OldWatchingPlugin(),
        new CopyWebpackPlugin([
            {
                from: './src/index.html',
                to: 'index.html',
                flatten: true
            },
            {
                from: './src/local.json',
                to: 'local.json',
                flatten: true
            }
        ]),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            IS_PRODUCTION: process.env.NODE_ENV === 'prod',
            IS_DEVELOPMENT: process.env.NODE_ENV === 'dev',
        })
    ],
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,
        esversion: 6,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false
    }
};

if (isProd) {
    settings.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
