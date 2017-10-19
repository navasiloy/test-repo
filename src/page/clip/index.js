import angular from 'angular';
import uirouter from 'angular-ui-router';
import SharedService from '../../component/common/shared.service';

import route from './clip.route';
import ClipService from './clip.service.js';
import ClipController from './clip.controller';
import AddClipController from './add/addClip.controller';

/**
* Demo module.
* Defines a new page called demo, that is displayed when the user navigates to the "/demo" URL.
*/
export default angular.module('page.clip', [uirouter])
.config(route)
.service('clipService', ClipService)
.controller('ClipController', ClipController)
.service('sharedService', SharedService)
.controller('AddClipController', AddClipController)
.name;
