export class TransactionModel {
  constructor(
      public readonly id : number,
      public income : number,
      public outcome : number,
      public agent : string,
      public description? : string
  ) {}
}