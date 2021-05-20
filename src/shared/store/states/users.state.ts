import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersService } from 'src/shared/services/users.service';

import { GetAllUsers } from '../actions/users.action';
import { iUsersDTO, UserModel } from './../../interfaces/user.model.ts';

export interface UsersStateModel {
  usersList: UserModel[];
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    usersList: [],
  },
})
@Injectable()
export class UsersState {
  @Selector() // TODO use of several stores in the selector
  public static users(state: UsersStateModel): UserModel[] {
    return state.usersList;
  }

  constructor(private usersService: UsersService) {}

  @Action(GetAllUsers)
  public getAllUsers(
    ctx: StateContext<UsersStateModel>
  ): Observable<iUsersDTO> {
    return this.usersService.getAllUsers().pipe(
      tap((result: iUsersDTO) => {
        ctx.patchState({
          usersList: result.users,
        });
      })
    );
  }
}
