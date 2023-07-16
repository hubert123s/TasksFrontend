export class Rate {
  id: number;
  currency: string;
  name: string;
  date: string;
  value: number;
  // @ts-ignore
  constructor()
  constructor(id: number, currency: string, name: string, date: string, value: number) {
    this.id = id;
    this.currency = currency;
    this.name = name;
    this.date = date;
    this.value = value;
  }
}
