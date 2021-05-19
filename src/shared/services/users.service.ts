import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from 'src/app/mocks/mock-users';

import { UserModel } from '../interfaces/user.model.ts';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getAllUsers(): Observable<UserModel[]> {
    return of(USERS);
  }

  getUserById(id: number): Observable<UserModel> | null {
    const foundUser = USERS.find((user) => user.id === id);
    if (foundUser) {
      return of(foundUser);
    } else {
      alert(`User with id: ${id} does not exists !`);
    }
    return null;
  }
}
