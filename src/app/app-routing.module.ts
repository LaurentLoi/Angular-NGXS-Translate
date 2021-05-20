import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () =>
      import('../views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cats',
    loadChildren: () =>
      import('../views/cats/cats.module').then((m) => m.CatsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../views/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
