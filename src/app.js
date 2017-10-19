import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngSanitize from 'angular-sanitize';
import ngTouch from 'angular-touch';
import uiBootstrap from 'angular-ui-bootstrap';
import toastr from 'angular-toastr';
import angularLoadingBar from 'angular-loading-bar';
import uiMask from 'angular-ui-mask';
import youtubeEmbed from 'angular-youtube-embed';

import uiRouter from 'angular-ui-router';
import config from './config';
import lodash from './util/lodash';
import moment from './util/moment';
import theme from './theme';
import mainLayout from './layout/main';

//Pages
import album from './page/album';
import clip from './page/clip';

/**
 * The main module of the application.
 */
angular.module('app', [
    // Dependencies
    uiRouter,
    ngSanitize,
    ngAria,
    ngAnimate,
    ngMessages,
    ngTouch,
    uiBootstrap,
    toastr,
    angularLoadingBar,
    uiMask,
    youtubeEmbed,

    // Custom modules
    config,
    lodash,
    moment,
    theme,
    mainLayout,

    //Pages
    album,
    clip
]);
