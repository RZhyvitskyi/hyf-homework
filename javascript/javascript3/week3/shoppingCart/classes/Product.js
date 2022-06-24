export default class Product {
  constructor({ name, price, description, id, amount = 1 }) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.id = id;
    this.amount = amount;
  }
}
