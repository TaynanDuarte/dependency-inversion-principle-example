import { FakeMySqlLib } from "./fakeMySqlLib";
import { Product } from "./product";

export class ProductService {
  private readonly mysqlLib = new FakeMySqlLib();

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

    // creating mysql query
    const sql = `
    INSERT INTO products (id, name, price)
    VALUES (${id}, ${cleanedName}, ${price}); 
    `;

    // saving the new peoduct on mysql database
    await this.mysqlLib.query(sql);
  }
}
