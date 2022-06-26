import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import {  AppActions } from './app.actions';

export interface IArtist {
  id: number | string;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
}

export class AppStateModel {
  public artists: IArtist[] = [];
}

const defaults = {
  artists: []
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
@Injectable()
export class AppState {
  @Action(AppActions.AddArtists)
  AddArtists({ getState, setState }: StateContext<AppStateModel>, { artists }: AppActions.AddArtists) {
    const state = getState();
    setState({ artists: [ ...state.artists, ...artists ] });
  }
}
