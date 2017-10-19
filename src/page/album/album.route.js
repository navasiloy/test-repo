import albumTemplate from './album.html';

/**
* Library page route definition
*/
export default function routes($stateProvider) {
  'ngInject';
  
  $stateProvider.state('album', {
    url: '/album',
    templateUrl: albumTemplate,
    controller: 'AlbumController',
    controllerAs: '$ctrl'
  });
}
