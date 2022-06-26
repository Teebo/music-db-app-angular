import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { switchMap } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists.service';
import { IAlbum, IArtist, ITrack } from 'src/app/state/app/app.state';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  artist!: IArtist;
  trackList!: ITrack[];
  albums!: IAlbum[]

  constructor(
    private artistsService: ArtistsService,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {

    this.activatedRoute.data
    .subscribe(
      (data: any) => {
        this.artist = data.artist;

        // this.artist = this.store.snapshot().app.artists[params.id];

        // this.store.select(state => state.app.artists[params.id])
        // .pipe(
        //   switchMap(
        //     (artist) => {
        //       if(artist) {
        //         return
        //       }
        //     }
        //   )
        // )

        this.artistsService.getTrackList(this.artist.id)
        .subscribe(
          (trackList: ITrack[]) => {
            this.trackList = trackList;
            console.log(this.trackList)
          }
        );


        this.artistsService.getAlbums(this.artist.id)
        .subscribe(
          (albums: IAlbum[]) => {
            this.albums = albums;
            console.log(this.albums)
          }
        )

        // this.artistsService.getArtist(params.id)
        // .subscribe(
        //   (artist) => {
        //     this.artist = artist;
        //   }
        // )
      }
    );



  }

  getImageUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

}
