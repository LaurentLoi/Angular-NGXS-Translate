import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { GetAllCats } from 'src/shared/store/actions/cats.actions';

import { iCatWithOwner } from './../../../../shared/interfaces/cat.model.ts';
import { GetAllUsers } from './../../../../shared/store/actions/users.action';
import { CatsState } from './../../../../shared/store/states/cats.state';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
})
export class CatsComponent implements OnInit {
  @Select(CatsState.cats) public cats$: Observable<iCatWithOwner[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetAllUsers());
    this.store.dispatch(new GetAllCats());
    // console.log(this.store.selectOnce((state) => state.cats));
  }

  async print(id: number): Promise<void> {
    console.log(
      await this.cats$
        .pipe(map((cats) => cats.find((cat) => cat.id === id)))
        .pipe(first())
        .toPromise()
    );
  }
}
