import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CatModel } from 'src/shared/interfaces/cat.model.ts';

import { GetAllCats } from '../actions/cats.actions';
import { iCatsDTO } from './../../interfaces/cat.model.ts';
import { CatsService } from './../../services/cats.service';

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
  @Selector()
  public static cats(state: CatsStateModel): CatModel[] {
    return state.catsList;
  }

  constructor(private catsService: CatsService) {}

  @Action(GetAllCats)
  public getAllCats(ctx: StateContext<CatsStateModel>): Observable<iCatsDTO> {
    console.log('ACTION');

    return this.catsService.getAllCats().pipe(
      tap((result: iCatsDTO) => {
        console.log('RESULT: ', result);

        ctx.patchState({
          catsList: result.cats,
        });
      })
    );
  }
}
