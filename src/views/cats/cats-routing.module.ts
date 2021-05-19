import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as containersCats from './containers';

const routes: Routes = [
  {
    path: '',
    component: containersCats.CatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatsRoutingModule {}
