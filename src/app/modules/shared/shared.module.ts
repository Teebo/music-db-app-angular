import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';

const MatModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...MatModules
  ],
  exports: [
    FlexLayoutModule,
    ...MatModules
  ]
})
export class SharedModule { }
