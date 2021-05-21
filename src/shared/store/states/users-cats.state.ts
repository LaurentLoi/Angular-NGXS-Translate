import { Injectable } from '@angular/core';
import { Selector, State, Store } from '@ngxs/store';

import { CatModel, iCatWithOwner } from '../../interfaces/cat.model.ts';
import { iUserWithCats, UserModel } from '../../interfaces/user.model.ts';
import { CatsState, CatsStateModel } from './cats.state';
import { UsersState, UsersStateModel } from './users.state';

export interface UsersAndCatsStateModel {
  usersList: iUserWithCats[];
  catsList: iCatWithOwner[];
  isUsersLoaded: boolean;
  isCatsLoaded: boolean;
}

@State<UsersAndCatsStateModel>({
  name: 'usersAndCats',
  defaults: {
    usersList: [],
    catsList: [],
    isUsersLoaded: false,
    isCatsLoaded: false,
  },
})
@Injectable()
export class UsersAndCatsState {
  constructor(private store: Store) {}

  @Selector([UsersState, CatsState])
  public static catsWithOwner(
    state: UsersAndCatsState,
    usersState: UsersStateModel,
    catsState: CatsStateModel
  ): iCatWithOwner[] {
    let catsWithOwner: iCatWithOwner[] = [];
    const users = usersState.usersList;
    const cats = catsState.catsList;

    cats.map((cat: CatModel) => {
      users.forEach((user: UserModel) => {
        if (user.id === cat.ownerId) {
          let catWithOwner: iCatWithOwner = {
            id: cat.id,
            name: cat.name,
            age: cat.age,
            owner: user,
          };
          catsWithOwner = [...catsWithOwner, catWithOwner];
        }
      });
    });

    return catsWithOwner;
  }

  @Selector([CatsState, UsersState])
  public static usersWithCats(
    state: UsersAndCatsState,
    catsState: CatsStateModel,
    usersState: UsersStateModel
  ): iUserWithCats[] {
    let usersWithCats: iUserWithCats[] = [];
    const users = usersState.usersList;
    const cats = catsState.catsList;

    console.log(users);
    console.log(cats);

    users.map((user) => {
      let userWithCats: iUserWithCats = {
        id: user.id,
        name: user.name,
        email: user.email,
        lang: user.lang,
        catsList: [],
      };
      cats.forEach((cat) => {
        if (user.catsIdList?.includes(cat.id)) {
          if (userWithCats.catsList) {
            console.log('1');

            userWithCats.catsList = [...userWithCats.catsList, cat];
            console.log(userWithCats.catsList);
          } else {
            userWithCats.catsList = [cat];
          }
        }
      });
      usersWithCats = [...usersWithCats, userWithCats];
    });
    console.log(usersWithCats);

    return usersWithCats;
  }

  //   @Action(GetAllUsersWithCats)
  //   public getAllUsersWithCats(
  //     ctx: StateContext<UsersAndCatsStateModel>
  //   ): Observable<iUsersWithCatsDTO | null> {
  //     const state = ctx.getState();
  //     if (state.isUsersLoaded) {
  //       return of(null);
  //     }
  //     return this.store.select('usersWithCats').pipe(
  //       tap((result: iUsersWithCatsDTO) => {
  //         ctx.patchState({
  //           usersList: result.users,
  //           isUsersLoaded: true,
  //         });
  //       })
  //     );
  //   }

  //   @Action(GetAllCatsWithUsers)
  //   public getAllCatsWithUsers(
  //     ctx: StateContext<UsersAndCatsStateModel>
  //   ): Observable<iCatsWithOwnerDTO | null> {
  //     const state = ctx.getState();
  //     if (state.isCatsLoaded) {
  //       return of(null);
  //     }
  //     return this.store.select('catsWithUsers').pipe(
  //       tap((result: iCatsWithOwnerDTO) => {
  //         ctx.patchState({
  //           catsList: result.cats,
  //           isCatsLoaded: true,
  //         });
  //       })
  //     );
  //   }
}
