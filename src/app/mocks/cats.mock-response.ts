import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { CatModel } from './../../shared/interfaces/cat.model.ts';
import { CATS } from './mock-cats';

export const mockCatsRes: any = (
  request: HttpRequest<any>
): Observable<HttpResponse<any>> => {
  const data: CatModel[] = CATS;

  if (request.method === 'GET') {
    const response: any = {
      status: 200,
      body: { cats: data },
    };
    console.log(response);

    return of(new HttpResponse(response));
  }
  return of(new HttpResponse());
};
