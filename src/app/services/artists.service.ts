import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { catchError, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppActions } from '../state/app/app.actions';
import { ArtistsDictionary, IArtist } from '../state/app/app.state';
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
    return this.http.get(`${environment.apiURL}search/artist`, {params: {q: id, limit: 1}}).pipe(
      map(res => res as IArtist),
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
