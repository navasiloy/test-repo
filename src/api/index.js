import angular from 'angular';
import API from './api';

/**
 * This module contains everything needed to communicate with the REST API of the application.
 * This includes basic API features, Resources, etc.
 */
export default angular.module('api', [])
    .service('API', API)
    .name;
