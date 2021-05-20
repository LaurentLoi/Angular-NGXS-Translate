export interface CatModel {
  id: number;
  name: string;
  age: number;
  ownerId: number;
}

export interface iCatsDTO {
  cats: CatModel[];
}
