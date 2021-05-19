import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatsRoutingModule } from './cats-routing.module';
import { containersCats } from './containers';

@NgModule({
  imports: [CommonModule, CatsRoutingModule],
  declarations: [...containersCats],
})
export class CatsModule {}
