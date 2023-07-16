export class RateOutputDto {
  currency: string;
  name: string;
  date: string;
  value: number;
  // @ts-ignore
  constructor()
  constructor( currency: string, name: string, date: string, value: number) {
    this.currency = currency;
    this.name = name;
    this.date = date;
    this.value = value;
  }
}
