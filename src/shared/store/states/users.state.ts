import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UsersService } from 'src/shared/services/users.service';

import { GetAllUsers } from '../actions/users.action';
import { iUsersDTO, UserModel } from './../../interfaces/user.model.ts';

export interface UsersStateModel {
  usersList: UserModel[];
  isLoaded: boolean;
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    usersList: [],
    isLoaded: false,
  },
})
@Injectable()
export class UsersState {
  constructor(private usersService: UsersService, private store: Store) {}

  @Selector()
  public static users(state: UsersStateModel): UserModel[] {
    return state.usersList;
  }

  @Action(GetAllUsers)
  public getAllUsers(
    ctx: StateContext<UsersStateModel>
  ): Observable<iUsersDTO | null> {
    const state = ctx.getState();
    if (state.isLoaded) {
      return of(null);
    }
    return this.usersService.getAllUsers().pipe(
      tap((result: iUsersDTO) => {
        ctx.patchState({
          usersList: result.users,
          isLoaded: true,
        });
      }),
      catchError((error) => {
        ctx.patchState({
          isLoaded: false,
        });
        return of(error);
      })
    );
  }
}
