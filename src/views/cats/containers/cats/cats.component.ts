import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CatModel } from 'src/shared/interfaces/cat.model.ts';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
})
export class CatsComponent implements OnInit {
  cats$: Observable<CatModel[]>;

  constructor(private store: Store) {
    this.cats$ = this.store.select((state) => state.cats.cats);
  }

  ngOnInit() {}
}
