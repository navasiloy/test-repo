import mainTemplate from './main.html';

/**
 * Main layout directive definition
 */
export default function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: mainTemplate
    };
}
