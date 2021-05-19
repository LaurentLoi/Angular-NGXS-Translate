import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { environment } from './../environments/environment.prod';
import { CatsModule } from './../views/cats/cats.module';
import { HomeModule } from './../views/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentsApp } from './components';
import { containersApp } from './containers';

@NgModule({
  declarations: [AppComponent, ...componentsApp, ...containersApp],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CatsModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
