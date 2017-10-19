import angular from 'angular';
import routeConfig from './routes';
import loggingConfig from './logging';
import toastr from './toastr';
import envConfig from './env';

/**
 * This configuration module defines several application-wide configurations, e.g.
 * - route configuration
 * - theme configuration
 * - environment variable constants
 * - etc.
 */
export default angular.module('config', [envConfig])
    .config(routeConfig)
    .config(loggingConfig)
    .config(toastr)
    .name;
