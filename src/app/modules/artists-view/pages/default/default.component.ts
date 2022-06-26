import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, from, map, Observable } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists.service';
import { IArtist } from 'src/app/state/app/app.state';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  searchControl = new FormControl('');
  artistsOptions$: Observable<IArtist[]> | Observable<[]> = from([]);
  constructor(
    private artistsService: ArtistsService,

    ) { }

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
      )
    .subscribe(
      (searchValue) => {
        const searchKey = searchValue.toLowerCase();

        this.artistsOptions$ =  this.artistsService.getArtists(searchKey)
        .pipe(
          map(
            (artists) => {
              if(artists) {
                if(searchKey.length && searchKey.length > 1) {
                  return this._filter(artists, searchKey);
                }

                return []
              } else {
                return []
              }
            }
          )
        )
      }
    );
  }

  // Filter/refine artists response again

  private _filter(artists: any, filterValue: string): IArtist[] {
    const searchReg = new RegExp(filterValue, 'ig')

    return artists ? artists.filter((artist: IArtist) => searchReg.test(artist.name)) : artists.length ? artists : [];
  }

  artistSelectionChange(selectedArtistOption: any): void {

  }

}
