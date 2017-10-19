export default class AddClipController {

  constructor($state, toastr, clipService, $uibModalInstance) {
    'ngInject';
    this.clip = {};
    this.$uibModalInstance = $uibModalInstance;
  }

  add() {
    this.$uibModalInstance.close(this.clip);
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

}
