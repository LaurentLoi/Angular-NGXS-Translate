import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { UserModel } from './../../shared/interfaces/user.model.ts';
import { USERS } from './mock-users';

export const mockUsersRes: any = (
  request: HttpRequest<any>
): Observable<HttpResponse<any>> => {
  const data: UserModel[] = USERS;

  if (request.method === 'GET') {
    const response: any = {
      status: 200,
      body: { users: data },
    };

    return of(new HttpResponse(response));
  }
  return of(new HttpResponse());
};
