import { Injectable } from '@angular/core';
import { State, Action, StateContext, Select } from '@ngxs/store';
import {  AppActions } from './app.actions';

export interface IArtist {
  id: number;
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

export interface IAlbum {
  id: number;
  title: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  link: string;
  nb_tracks: string;
  label: string;
  duration: number;
  fans: string;
  rating: string;
  release_date: string;
}

export interface ITrack {
  id: number;
  title: string;
  link: string;
  duration: number;
  track_position: string;
  preview: string;

}

export type ArtistsDictionary = Record<number | string, IArtist>
export class AppStateModel {
  public artists: ArtistsDictionary = {};
}

const defaults = {
  artists: {}
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
    setState({ artists: {...state.artists, ...artists} });
  }

  @Select()
  static artists(state: AppStateModel) {
    return state.artists;
  }
}
