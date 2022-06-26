import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { IArtist } from 'src/app/state/app/app.state';
import { normalizeValue } from 'src/app/utils/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  searchControl = new FormControl('');
  artistsOptions$: Observable<IArtist[]> = from([]);
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
    .subscribe(
      (searchValue) => {
        const searchKey = searchValue.toLowerCase();

        console.log(searchKey);

        this.http.get(`${environment.apiURL}search`, {
          params: {
            q: 'eminem'
          }
        }).subscribe()

        // this.artistsOptions$ = this.sessionLocationsQuery.getAsyncLocalLocationsGroup(locationGroupKey)
        // .pipe(
        //   map(
        //     (locations) => {
        //       if(name.length && name.length > 1) {
        //         return this._filter(locations, name)
        //       }
        //     }
        //   )
        // );

        // if(name.length && name.length === 1) {
        //   if(!this.sessionLocationsQuery.getSyncHasLocationGroup(locationGroupKey)) {
        //     this.sessionLocationsService.getLocationsGroup(locationGroupKey)
        //     .subscribe(
        //       (locations) => {
        //         this.locations = locations;
        //       }
        //     );
        //   }
        // }
      }
    );
  }

  private _filter(artists: IArtist[], value: string): IArtist[] {
    const filterValue = normalizeValue(value);

    const searchReg = new RegExp(filterValue, 'ig')

    return artists ? artists.filter(artist => searchReg.test(artist.name)) : [];
  }

  artistSelectionChange(selectedArtistOption: any): void {

  }

}
