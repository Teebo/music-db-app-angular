import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistDetailViewRoutingModule } from './artist-detail-view-routing.module';
import { DefaultComponent } from './pages/default/default.component';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    ArtistDetailViewRoutingModule
  ]
})
export class ArtistDetailViewModule { }
