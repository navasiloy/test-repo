import angular from 'angular';
import activateByState from './activateByState';

/**
 * Export directives related to the application-wide navigation bar.
 */
export default angular.module('component.menu', [])
    .directive('activateByState', activateByState)
    .name;
