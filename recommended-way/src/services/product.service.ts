import { IProductRepository } from "../interfaces/iproduct.repository";
import { Product } from "../entities/product";

export class ProductService {

  // It is able to receive a class that implements the interface
  constructor(private readonly productRepository: IProductRepository) {}

  /**
   * This method removes special characters and empty spaces in the product name
   * and create a new product on database
   * @param name product name
   * @param price product price
   */
  async createProduct(name: string, price: number) {
    // new random id
    const id = Math.random() * 100;

    // replacing $, @ and * with empty string,
    // then removing empty space before and after the entire product name
    const cleanedName = name.replace(/\$|\@|\*/g, "").trim();

    // creating a new product
    const newProduct = new Product(id, cleanedName, price);

    // saving the new product on database. Doesn't metter what is
    this.productRepository.createProduct(newProduct);

    // // creating mysql query
    // const sql = `
    // INSERT INTO products (id, name, price)
    // VALUES (${id}, ${cleanedName}, ${price});
    // `;

    // // saving the new peoduct on mysql database
    // await this.mysqlLib.query(sql);
  }
}
