import { UserModel } from '../../shared/interfaces/user.model.ts';

export const USERS: UserModel[] = [
  {
    id: 1,
    name: 'A',
    email: 'a.a@itw.be',
    lang: 'fr',
    catsIdList: [1, 2],
  },
  {
    id: 2,
    name: 'B',
    email: 'b.b@itw.be',
    lang: 'fr',
    catsIdList: [3, 4],
  },
  {
    id: 3,
    name: 'C',
    email: 'c.c@itw.be',
    lang: 'fr',
    catsIdList: [5, 6],
  },
];
