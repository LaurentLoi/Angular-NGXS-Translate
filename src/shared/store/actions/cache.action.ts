export class SetIsUsersDataLoaded {
  static readonly type = '[UsersData] is loaded';
  constructor(public isLoaded: boolean) {}
}

export class SetIsCatsDataLoaded {
  static readonly type = '[CatsData] is loaded';
  constructor(public isLoaded: boolean) {}
}
