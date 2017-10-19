import angular from 'angular';
import MainLayout from './main-layout';
import header from '../../component/header';
import footer from '../../component/footer';
import './main-layout.less';

/**
 * This module exports a directive that can be used to display a layout.
 * This layout is the main layout of the application.
 * Creates a Header, a Footer, and a Content (where the page content goes.)
 */
export default angular.module('layout.main', [header, footer])
    .directive('mainLayout', MainLayout)
    .name;
