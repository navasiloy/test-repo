import angular from 'angular';
import ConfirmService from './confirm.service.js';
import ConfirmController from './confirm.controller.js';

/**
 * This module provides a service to be able to easily display confirm dialogs to the user.
 */
export default angular.module('component.confirm', [])
    .service('confirmService', ConfirmService)
    .controller('ConfirmController', ConfirmController)
    .name;
