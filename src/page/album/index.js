import angular from 'angular';
import uirouter from 'angular-ui-router';
import SharedService from '../../component/common/shared.service';

import route from './album.route';
import AlbumService from './album.service.js';
import AlbumController from './album.controller';

/**
* Demo module.
* Defines a new page called demo, that is displayed when the user navigates to the "/demo" URL.
*/
export default angular.module('page.album', [uirouter])
.config(route)
.service('albumService', AlbumService)
.service('sharedService', SharedService)
.controller('AlbumController', AlbumController)
.name;
