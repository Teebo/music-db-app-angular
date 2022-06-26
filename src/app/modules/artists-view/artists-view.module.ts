import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsViewRoutingModule } from './artists-view-routing.module';
import { DefaultComponent } from './pages/default/default.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    ArtistsViewRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArtistsViewModule { }
