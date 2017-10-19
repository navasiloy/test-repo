/**
 * This is a base class for page controllers, thus it shouldn't be used on it's own.
 * But every other page controller should extend it.
 */
export default class BasePageController {
    /**
     * The title can also be set in the contructor. It defaults to ''.
     * @param title the title of the page
     */
    constructor(title = '') {
        this._title = title;
    }

    /**
     * Get the title of the page
     * @return the title
     */
    get title() {
        return this._title;
    }

    //noinspection JSAnnotator
    /**
     * Change the title of the page
     * @param newTitle the new title to use
     */
    set title(newTitle) {
        this._title = newTitle;
    }
}
