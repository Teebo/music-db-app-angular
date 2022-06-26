import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ArtistsService } from 'src/app/services/artists.service';
import { IArtist } from 'src/app/state/app/app.state';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  artist!: IArtist;

  constructor(
    private artistsService: ArtistsService,
    private activatedRoute: ActivatedRoute,
    private store: Store
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(
      (params: any) => {
        console.log(this.store.snapshot().app.artists);
        // this.artistsService.getArtist(params.id)
        // .subscribe(
        //   (artist) => {
        //     this.artist = artist;
        //   }
        // )
      }
    )

  }

}
