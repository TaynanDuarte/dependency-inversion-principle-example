import { Product } from "../entities/product";
import { IProductRepository } from "../interfaces/iproduct.repository";

export class ProductMongodbRepository implements IProductRepository {
  async createProduct(product: Product): Promise<void> {
    console.log(`>> ${product.Name} saved using MongoDB`);
  }
}
