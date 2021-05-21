import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { UsersAndCatsState } from 'src/shared/store/states/users-cats.state';
import { UsersModule } from 'src/views/users/users.module';

import { environment } from './../environments/environment.prod';
import { CacheState } from './../shared/store/states/cache.state';
import { CatsState } from './../shared/store/states/cats.state';
import { UsersState } from './../shared/store/states/users.state';
import { CatsModule } from './../views/cats/cats.module';
import { HomeModule } from './../views/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentsApp } from './components';
import { containersApp } from './containers';
import { httpInterceptorProviders } from './interceptors';

export const createTranslateLoader = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/locales/', '.json');
@NgModule({
  declarations: [AppComponent, ...componentsApp, ...containersApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    CatsModule,
    UsersModule,
    NgxsModule.forRoot([CatsState, UsersState, CacheState, UsersAndCatsState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
