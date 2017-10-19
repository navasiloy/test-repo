export default class ConfirmController {
    constructor($uibModalInstance, options) {
        'ngInject';

        this.$uibModalInstance = $uibModalInstance;
        this.modalOptions = options;
    }

    ok() {
        this.$uibModalInstance.close('ok');
    }

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    }
}
