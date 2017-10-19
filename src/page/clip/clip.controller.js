import addClipTemplate from './add/addClip.html';

export default class ClipController {

  constructor($rootScope, $state, toastr, clipService, sharedService, youtubeEmbedUtils, $uibModal) {
    'ngInject';

    this.modalDefaults = {
      backdrop: true,
      keyboard: true,
      modalFade: true,
      templateUrl: addClipTemplate,
      controller: 'AddClipController',
      controllerAs: '$ctrl'
    };

    this.$uibModal = $uibModal;

    this.sharedService = sharedService;
    this.youtubeEmbedUtils = youtubeEmbedUtils;
    this.selectedClip = undefined;
    this.toastr = toastr;

    this.selectedAlbum = this.sharedService.getAlbumID($state.params.id);

    if (!this.selectedAlbum) {
      $state.go('album');
    } else if ((this.selectedAlbum.clips || []).length) {
      this.playClip(this.selectedAlbum.clips[0]);
    }

  }

  addClip() {
    const modalInstance = this.$uibModal.open(this.modalDefaults);

    modalInstance.result.then((res) => {
      res.id = this.selectedAlbum.clips.length + 2;
      res.link = this.youtubeEmbedUtils.getIdFromURL(res.link);
      this.selectedAlbum.clips.push(res);
      this.sharedService.addClip(res);
      this.toastr.info('New clip successfully add to Album', 'Info!');
    }, () => {
    });
  }

  playClip(clip) {
    this.selectedClip = clip.link;
    this.toastr.info('Clip successfully loaded', 'Info!');
  }

}
