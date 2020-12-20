export class ProductDTO {
    constructor(
      public name: string,
      public description: string,
      public quantity: number,
      public user_id: string
    ) {}
  }
  