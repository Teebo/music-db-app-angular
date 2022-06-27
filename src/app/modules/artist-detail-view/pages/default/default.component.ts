import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../../../../services/artists.service';
import { IAlbum, IArtist, ITrack } from '../../../../state/app/app.state';

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
    private sanitizer: DomSanitizer,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data
    .subscribe(
      (data: any) => {
        this.artist = data.artist;

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
        );
      }
    );
  }

  getImageUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

  onBack(): void {
    this.router.navigate(['/artists']);
  }

}
