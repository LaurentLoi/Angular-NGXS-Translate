import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CatModel } from 'src/shared/interfaces/cat.model.ts';

import { GetAllCats } from '../actions/cats.actions';
import { CatsService } from './../../services/cats.service';

export interface CatsStateModel {
  cats: CatModel[];
}

@State<CatsStateModel>({
  name: 'cats',
  defaults: {
    cats: [],
  },
})
@Injectable()
export class CatsState {
  @Selector()
  public static cats(state: CatsStateModel): CatModel[] {
    return state.cats;
  }

  constructor(private catsService: CatsService) {}

  @Action(GetAllCats)
  public getAllCats(ctx: StateContext<CatsStateModel>): Observable<CatModel[]> {
    return this.catsService.getAllCats().pipe(
      tap((result: CatModel[]) => {
        ctx.patchState({
          cats: result,
        });
      })
    );
  }
}
