var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-ui-mask/dist/mask.js',
            'node_modules/angular-loading-bar/build/loading-bar.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-aria/angular-aria.js',
            'node_modules/angular-toastr/dist/angular-toastr.js',
            'node_modules/angular-messages/angular-messages.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-touch/angular-touch.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            'node_modules/lodash/lodash.js',
            'node_modules/moment/moment.js',
            'src/**/*.spec.js'
        ],
        preprocessors: {
            'src/**/*.js': ['webpack']
        },
        reporters: ['mocha'],
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS', 'Chrome'],
        singleRun: true,
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        }
    });
};
