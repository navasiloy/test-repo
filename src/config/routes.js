/**
 * Global route configurations, sets up the html5 mode and the default route.
 */
export default function ($urlRouterProvider, $locationProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/album');
    $locationProvider.html5Mode(false);
}
