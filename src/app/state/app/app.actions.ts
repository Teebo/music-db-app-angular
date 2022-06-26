import { ArtistsDictionary, IArtist } from './app.state';

export namespace AppActions {
  export class AddArtists {
    static readonly type = '[App] Add Artists';
    constructor(public artists: ArtistsDictionary) { }
  }
}


