import angular from 'angular';
import BasePageController from './basepage.controller.js';

/**
 * This module defines a controller that every other page's controller should extend.
 */
export default angular.module('page.basepage', [])
    .controller('BasePageController', BasePageController)
    .name;
