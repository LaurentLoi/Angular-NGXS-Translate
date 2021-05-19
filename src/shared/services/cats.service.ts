import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CATS } from '../../app/mocks/mock-cats';
import { CatModel } from '../interfaces/cat.model.ts';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor() {}

  getAllCats(): Observable<CatModel[]> {
    return of(CATS);
  }

  getCatById(id: number): Observable<CatModel> | null {
    const foundCat = CATS.find((cat) => cat.id === id);
    if (foundCat) {
      return of(foundCat);
    } else {
      alert(`Cat with id: ${id} does not exists !`);
    }
    return null;
  }
}
