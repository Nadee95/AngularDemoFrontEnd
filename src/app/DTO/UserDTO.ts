export class UserDTO {
    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public phone: number,
      public address: string,
      public token: string
    ) {}
  }
  