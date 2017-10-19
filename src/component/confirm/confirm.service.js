import confirmTemplate from './confirm.html';

/**
 * A service that can be used to display confirm dialogs to the user.
 */
export default class ConfirmService {
    constructor($uibModal, _) {
        'ngInject';

        this.modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: confirmTemplate,
            controller: 'ConfirmController',
            controllerAs: '$ctrl'
        };

        this.modalOptions = {
            closeButtonText: 'Close',
            actionButtonText: 'OK',
            headerText: 'Proceed?',
            bodyText: 'Perform this action?'
        };

        this.$uibModal = $uibModal;
        this._ = _;
    }

    /**
     * Create an options object, by copying the default options, and overriding with the user specified options object.
     * @param options
     * @return {{}}
     */
    createOptions(options) {
        const tempModalDefaults = {};
        const tempModalOptions = {};

        this._.assign(tempModalDefaults, this.modalDefaults);
        this._.assign(tempModalOptions, this.modalOptions, options);

        tempModalDefaults.resolve = {
            options: tempModalOptions
        };

        return tempModalDefaults;
    }

    /**
     * Calling this method will display a confirmation dialog.
     *
     * @param options (optional) custom options object with the following possible values
     *                           - headerText The title of the modal window
     *                           - bodyText The main text displayed in the modal window
     *                           - actionButtonText: OK button text
     *                           - closeButtonText: Cancel button text
     * @param okFunc (optional) callback that is called when the user presses the OK button
     * @param cancelFunc (optional) callback that is called when the user presses the Cancel button
     */
    confirm(options, okFunc, cancelFunc) {
        const modalInstance = this.$uibModal.open(this.createOptions(options));

        modalInstance.result.then(
            () => {
                if (this._.isFunction(okFunc)) {
                    okFunc();
                }
            },
            () => {
                if (this._.isFunction(cancelFunc)) {
                    cancelFunc();
                }
            });
    }
}
