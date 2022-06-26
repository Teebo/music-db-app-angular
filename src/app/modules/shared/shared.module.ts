import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatListModule } from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FansCountPipe } from 'src/app/pipes/fans-count.pipe';

const MatModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatListModule
];


@NgModule({
  declarations: [FansCountPipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...MatModules
  ],
  exports: [
    FlexLayoutModule,
    ...MatModules,
    FansCountPipe
  ]
})
export class SharedModule { }
