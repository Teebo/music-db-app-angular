import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { catchError, map, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppActions } from '../state/app/app.actions';
import { ArtistsDictionary, IAlbum, IArtist, ITrack } from '../state/app/app.state';
import { handleError } from '../utils/common';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(
    private http:HttpClient,
    private store: Store
    ) { }

  getArtists(searchKey: string): Observable<IArtist[]> {
    return this.http.get(`${environment.apiURL}search/artist`, {
      params: {
        q: searchKey,
        offset: 0,
        limit: 10,
        type: 'artist'
      }
    })
    .pipe(
      map(
        (res: any) => {
          return res.data
        }
      ),
      tap(
        (artists: IArtist[]) => {
          this.store.dispatch(new AppActions.AddArtists(createArtistsDictionary(artists)));
        }
      ),
      catchError(handleError)
    );
  }

  getArtist(id: number): Observable<IArtist> {
    return this.http.get(`${environment.apiURL}artist/${id}`).pipe(
      map((res: any) => res as IArtist),
      catchError(handleError)
    );
  }

  getTrackList(id: number): Observable<any> {
    return this.http.get(`${environment.apiURL}artist/${id}/top?limit=5`).pipe(
      map((res: any) => res.data as ITrack[]),
      catchError(handleError)
    );
  }

  getAlbums(id: number): Observable<IAlbum[]> {
    return this.http.get(`${environment.apiURL}artist/${id}/albums&offset=0?limit=5`).pipe(
      map((res: any) => res.data as IAlbum[]),
      catchError(handleError)
    );
  }
}


function createArtistsDictionary(artists: IArtist[]): ArtistsDictionary {
  const artistsDictionary: ArtistsDictionary = {};

  artists.forEach(
    (artist: IArtist) => {
      artistsDictionary[artist.id] = artist;
    }
  );

  return artistsDictionary;
}
