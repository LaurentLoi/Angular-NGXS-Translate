import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CatModel } from 'src/shared/interfaces/cat.model.ts';
import { GetAllCats } from 'src/shared/store/actions/cats.actions';

import { CatsState } from './../../../../shared/store/states/cats.state';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
})
export class CatsComponent implements OnInit {
  @Select(CatsState.cats) public cats$: Observable<CatModel[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetAllCats());
    this.cats$.subscribe((cats) => console.log(cats));
    // console.log(this.store.selectOnce((state) => state.cats));
  }
}
