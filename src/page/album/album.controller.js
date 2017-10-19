export default class AlbumController {

  constructor(toastr, albumService, sharedService) {
    'ngInject';

    // this.toastr = toastr;
    // this.albumService = albumService;
    this.sharedService = sharedService;
    this.sharedService.getAlbums().success((albums) => {
      this.albums = albums;
    });

  }

}
