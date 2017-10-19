//import confirmTemplate from './confirm.html';

/**
* A service that can be used to display confirm dialogs to the user.
*/
export default class ClipService {

  //    static $inject = ['$http'];

  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  /**
  * Create an options object, by copying the default options, and overriding with the user specified options object.
  * @param options
  * @return {{}}
  */
  getLocalJSON() {
    return this.$http.get('local.json');
  }

}
