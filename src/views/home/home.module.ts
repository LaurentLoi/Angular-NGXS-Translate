import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { containersHome } from './containers';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [...containersHome],
})
export class HomeModule {}
