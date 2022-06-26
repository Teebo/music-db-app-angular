import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of, switchMap, take } from 'rxjs';
import { ArtistsService } from '../services/artists.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistResolver implements Resolve<boolean> {
  constructor(private store: Store, private artistsService: ArtistsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(state => state.app.artists[route.params['id']])
    .pipe(
      switchMap(
        (artist) => {
          if(!artist) {
            return this.artistsService.getArtist(route.params['id']);
          } else {
            return this.store.select(state => state.app.artists[route.params['id']]);
          }
        }
      ),
      take(1),
    );
  }
}
