import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UsersState } from 'src/shared/store/states/users.state';

import { UserModel } from './../../../../shared/interfaces/user.model.ts';
import { GetAllUsers } from './../../../../shared/store/actions/users.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
})
export class UsersComponent implements OnInit {
  @Select(UsersState.users) public users$: Observable<UserModel[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetAllUsers());
    // console.log(this.store.selectOnce((state) => state.cats));
  }

  async print(id: number): Promise<void> {
    console.log(
      await this.users$
        .pipe(map((cats) => cats.find((cat) => cat.id === id)))
        .pipe(first())
        .toPromise()
    );
  }
}
