const products = [];

module.exports = class Product {
  constructor(name, price, imageURL, description) {
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
  }

  saveProduct() {
    products.push(this);
  }
  static getAll() {
    return products;
  }
};

// const products = Product.getAll();

// const p = new Product("samsung", 2000, "1.jpg", "iyi telefon");

// p.saveProduct();
