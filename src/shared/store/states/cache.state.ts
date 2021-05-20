import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { SetIsCatsDataLoaded, SetIsUsersDataLoaded } from './../actions/cache.action';

export interface CacheStateModel {
  isUsersDataLoaded: boolean;
  isCatsDataLoaded: boolean;
}

@State<CacheStateModel>({
  name: 'cacheState',
  defaults: {
    isUsersDataLoaded: false,
    isCatsDataLoaded: false,
  },
})
@Injectable()
export class CacheState {
  constructor() {}

  @Selector()
  public static isUserDataLoaded(state: CacheStateModel): boolean {
    return state.isUsersDataLoaded;
  }

  @Selector()
  public static isCatsDataLoaded(state: CacheStateModel): boolean {
    return state.isCatsDataLoaded;
  }

  @Action(SetIsUsersDataLoaded)
  public setIsUsersDataLoaded(
    ctx: StateContext<CacheStateModel>,
    action: SetIsUsersDataLoaded
  ): void {
    ctx.patchState({
      isUsersDataLoaded: action.isLoaded,
    });
  }

  @Action(SetIsCatsDataLoaded)
  public setIsCatsDataLoaded(
    ctx: StateContext<CacheStateModel>,
    action: SetIsCatsDataLoaded
  ): void {
    ctx.patchState({
      isCatsDataLoaded: action.isLoaded,
    });
  }
}
