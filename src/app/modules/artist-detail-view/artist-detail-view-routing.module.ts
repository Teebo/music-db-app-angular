import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistResolver } from 'src/app/resolvers/artist.resolver';
import { DefaultComponent } from './pages/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    resolve: {artist: ArtistResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistDetailViewRoutingModule { }
