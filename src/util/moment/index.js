import angular from 'angular';
import moment from 'moment';

/**
 * Export moment as an angular service to be able to use with dependency injection.
 */
export default angular.module('util.moment', [])
    .service('moment', function () {
        return moment;
    })
    .name;