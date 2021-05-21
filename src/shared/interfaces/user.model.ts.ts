import { CatModel } from './cat.model.ts';

export interface UserModel {
  id: number;
  name: string;
  email: string;
  lang: string;
  catsIdList?: number[];
}

export interface iUsersDTO {
  users: UserModel[];
}

export interface iUsersWithCatsDTO {
  users: iUserWithCats[];
}

export interface iUserWithCats {
  id: number;
  name: string;
  email: string;
  lang: string;
  catsList?: CatModel[];
}
