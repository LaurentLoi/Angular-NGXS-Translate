import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';

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

export const createLocalizeRouterHttpLoader = (
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient
): LocalizeRouterHttpLoader =>
  new LocalizeRouterHttpLoader(translate, location, settings, http);

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: createLocalizeRouterHttpLoader,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
    }),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class AppRoutingModule {}
