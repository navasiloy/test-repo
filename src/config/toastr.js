import angular from 'angular';

/**
 * angular-toastr configuration
 */
export default function (toastrConfig) {
    'ngInject';

    angular.extend(toastrConfig, {
        autoDismiss: true,
        containerId: 'toast-container',
        maxOpened: 5,
        newestOnTop: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        target: 'body',
        progressBar: true
    });
}
