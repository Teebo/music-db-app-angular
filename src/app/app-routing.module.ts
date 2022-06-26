import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full',
  },
  {
    path: 'artists',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/artists-view/artists-view.module').then(m => m.ArtistsViewModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./modules/artist-detail-view/artist-detail-view.module').then(m => m.ArtistDetailViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
