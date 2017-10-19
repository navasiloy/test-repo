import angular from 'angular';
import env from './env';
import configService from './configService';

/**
 * This module loads the environment specific configuration files, and also creates a service named 'env' to be able
 * to get the current environment anywhere in the application.
 */
export default angular.module('config.env', [])
    .constant('env', env)
    .factory('config', configService)
    .run(($log, env) => {
        'ngInject';

        $log.debug(`Running in environment: ${env.NODE_ENV}`);
    })
    .name;

