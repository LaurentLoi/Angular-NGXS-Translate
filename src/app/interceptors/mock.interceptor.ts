import { HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { mockCatsRes } from '../mocks/cats.mock-response';
import { environment } from './../../environments/environment';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const mockEnv = environment.mock;

    return of(null).pipe(
      mergeMap(() => {
        // USERS
        if (mockEnv.all || (mockEnv.services && mockEnv.services.users)) {
        }

        // CATS
        if (mockEnv.all || (mockEnv.services && mockEnv.services.cats)) {
          return mockCatsRes(request);
        }
        return next.handle(request);
      })
    );
  }
}

export const mockInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockInterceptor,
  multi: true,
};
