import { HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

import { mockCatsRes } from '../mocks/cats.mock-response';
import { environment } from './../../environments/environment';
import { mockUsersRes } from './../mocks/users.mock-response';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const mockEnv = environment.mock;

    return of(null)
      .pipe(
        mergeMap(() => {
          // USERS
          if (
            (mockEnv.all || (mockEnv.services && mockEnv.services.users)) &&
            request.url.endsWith('users')
          ) {
            return mockUsersRes(request);
          }

          // CATS
          if (
            (mockEnv.all || (mockEnv.services && mockEnv.services.cats)) &&
            request.url.endsWith('cats')
          ) {
            return mockCatsRes(request);
          }
          return next.handle(request);
        })
      )
      .pipe(materialize(), delay(200), dematerialize());
  }
}

export const mockInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockInterceptor,
  multi: true,
};
