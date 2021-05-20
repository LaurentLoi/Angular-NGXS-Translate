import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CatModel, iCatsWithOwnerDTO } from 'src/shared/interfaces/cat.model.ts';
import { UsersState } from 'src/shared/store/states/users.state';

import { GetAllCats } from '../actions/cats.actions';
import { iCatsDTO, iCatWithOwner } from './../../interfaces/cat.model.ts';
import { CatsService } from './../../services/cats.service';
import { UsersStateModel } from './users.state';

export interface CatsStateModel {
  catsList: CatModel[];
}

@State<CatsStateModel>({
  name: 'cats',
  defaults: {
    catsList: [],
  },
})
@Injectable()
export class CatsState {
  constructor(private catsService: CatsService, private store: Store) {}

  @Selector([UsersState]) // TODO use of several stores in the selector
  public static cats(
    state: CatsStateModel,
    usersState: UsersStateModel
  ): iCatWithOwner[] {
    const catsWithOwner: iCatsWithOwnerDTO = { cats: [] };
    const users = usersState.usersList;
    const cats = state.catsList;

    cats.map((cat) => {
      users.forEach((user) => {
        if (user.id === cat.ownerId) {
          let catWithOwner: iCatWithOwner = {
            id: cat.id,
            name: cat.name,
            age: cat.age,
            owner: user,
          };
          catsWithOwner.cats.push(catWithOwner);
        }
      });
    });
    return catsWithOwner.cats;
  }

  @Action(GetAllCats)
  public getAllCats(
    ctx: StateContext<CatsStateModel>
  ): Observable<iCatsWithOwnerDTO> {
    return this.catsService.getAllCats().pipe(
      tap((result: iCatsDTO) => {
        ctx.patchState({
          catsList: result.cats,
        });
      })
    );
  }
}
