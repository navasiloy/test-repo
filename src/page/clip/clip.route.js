import clipTemplate from './clip.html';

/**
* Library page route definition
*/
export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('clip', {
    url: '/album/:id',
    templateUrl: clipTemplate,
    controller: 'ClipController',
    controllerAs: '$ctrl'
  });
}
