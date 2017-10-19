import angular from 'angular';
import footer from './footer.js';

/**
 * Footer module that defines a footer component that can be used as a global page footer
 */
export default angular.module('component.footer', [])
    .component('footer', footer)
    .name;
