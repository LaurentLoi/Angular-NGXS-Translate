import { UserModel } from './user.model.ts';

export interface CatModel {
  id: number;
  name: string;
  age: number;
  ownerId?: number;
}

export interface iCatsDTO {
  cats: CatModel[];
}

export interface iCatsWithOwnerDTO {
  cats: iCatWithOwner[];
}

export interface iCatWithOwner {
  id: number;
  name: string;
  age: number;
  owner?: UserModel;
}
