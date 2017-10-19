import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'angular-toastr/dist/angular-toastr.min.css';
import 'angular-loading-bar/build/loading-bar.css';
import './theme.less';

/**
 * This module defines the theme of the application.
 * You can define any less files in this module that and import them, so it will be automatically loaded.
 *
 * IMPORTANT: Please prefer to define component/page specific less files in their own module.
 * Here you should only define GLOBAL styles, variables, etc.
 */
export default angular.module('theme', [])
    .name;
