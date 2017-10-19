import angular from 'angular';
import header from './header.js';
import menu from '../menu';

/**
 * Header module that defines a header component that can be used as a global page header
 */
export default angular.module('component.header', [menu])
    .component('header', header)
    .name;
