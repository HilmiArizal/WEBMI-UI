import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then((res) => res.UsersModule)
  },
  {
    path: 'webmi',
    redirectTo: 'webmi',
    pathMatch: 'full'
  },
  {
    path: 'webmi',
    loadChildren: () => import('./pages/pages.module').then((res) => res.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
