import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as containersHome from './containers';

const routes: Routes = [
  {
    path: '',
    component: containersHome.HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
