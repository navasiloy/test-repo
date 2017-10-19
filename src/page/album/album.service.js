/**
 * A service that used .
 */
export default class AlbumService {

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
