import angular from 'angular';
import _ from 'lodash';

/**
 * Export lodash as an angular service to be able to use with dependency injection.
 */
export default angular.module('util.lodash', [])
    .service('_', function () {
        return _;
    })
    .name;