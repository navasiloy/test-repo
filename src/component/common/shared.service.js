/**
* A service that can be used to display confirm dialogs to the user.
*/
export default class SharedService {

  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.albums = $http.get('local.json').success((data) => {
      this.data = data;
    });
  }

  getAlbums() {
    return this.albums;
  }


  getAlbumID(id) {
    let selectedAlbum;

    if (this.data) {
      this.data.forEach((album) => {
        if (album.id == id) {
          selectedAlbum = album;
        }
      });

    }

    return selectedAlbum;
  }

  addClip(clip, id) {
    this.data.forEach((album) => {
      if (album.id == id) {
        album.clips.push(clip);
      }
    });

    return clip;
  }

}
