import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsViewRoutingModule } from './artists-view-routing.module';
import { DefaultComponent } from './pages/default/default.component';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    ArtistsViewRoutingModule
  ]
})
export class ArtistsViewModule { }
