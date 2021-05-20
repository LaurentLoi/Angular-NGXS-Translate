import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { containersUsers } from './containers';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [CommonModule, UsersRoutingModule],
  declarations: [...containersUsers],
})
export class UsersModule {}
