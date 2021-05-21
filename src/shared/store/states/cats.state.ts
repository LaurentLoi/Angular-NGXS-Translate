import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { GetAllCats } from '../actions/cats.actions';
import { CatModel, iCatsDTO, iCatsWithOwnerDTO } from './../../interfaces/cat.model.ts';
import { CatsService } from './../../services/cats.service';

export interface CatsStateModel {
  catsList: CatModel[];
  isLoaded: boolean;
}

@State<CatsStateModel>({
  name: 'cats',
  defaults: {
    catsList: [],
    isLoaded: false,
  },
})
@Injectable()
export class CatsState {
  constructor(private catsService: CatsService, private store: Store) {}

  @Selector()
  public static cats(state: CatsStateModel): CatModel[] {
    return state.catsList;
  }

  @Action(GetAllCats)
  public getAllCats(
    ctx: StateContext<CatsStateModel>
  ): Observable<iCatsWithOwnerDTO | null> {
    const state = ctx.getState();
    if (state.isLoaded) {
      return of(null);
    }

    return this.catsService.getAllCats().pipe(
      tap((result: iCatsDTO) => {
        console.log(result);

        ctx.patchState({
          catsList: result.cats,
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
