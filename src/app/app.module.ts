import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { UsersModule } from 'src/views/users/users.module';

import { environment } from './../environments/environment.prod';
import { CatsState } from './../shared/store/states/cats.state';
import { UsersState } from './../shared/store/states/users.state';
import { CatsModule } from './../views/cats/cats.module';
import { HomeModule } from './../views/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentsApp } from './components';
import { containersApp } from './containers';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [AppComponent, ...componentsApp, ...containersApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    CatsModule,
    UsersModule,
    NgxsModule.forRoot([CatsState, UsersState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
