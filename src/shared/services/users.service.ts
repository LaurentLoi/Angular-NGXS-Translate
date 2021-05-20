import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from 'src/app/mocks/mock-users';
import { environment } from 'src/environments/environment';

import { iUsersDTO, UserModel } from '../interfaces/user.model.ts';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<iUsersDTO> {
    return this.http.get<iUsersDTO>(environment.baseUrl + 'users');
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
