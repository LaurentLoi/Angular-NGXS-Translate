import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CATS } from '../../app/mocks/mock-cats';
import { CatModel, iCatsDTO } from '../interfaces/cat.model.ts';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient) {}

  getAllCats(): Observable<iCatsDTO> {
    return this.http.get<iCatsDTO>(environment.baseUrl + 'cats');
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
