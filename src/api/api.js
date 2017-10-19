/**
 * Basic API related utility functions
 */
export default class API {
    constructor(config, _) {
        'ngInject';

        this._ = _;
        this.config = config;
    }

    /**
     * Construct and return the API URL.
     * If called without parameters, returns the base API URL.
     * @param url (optional) url that must concatanated to the base API URL
     * @return {*} the URL
     */
    getApiUrl(url) {
        if (this._.isUndefined(url) || url === '') {
            return this.config.API_URL;
        } else {
            if (!this._.startsWith('/')) {
                url = '/' + url;
            }
            return this.config.API_URL + url;
        }
    }
}
