import { Product } from "../entities/product";

export interface IProductRepository {
  createProduct(product: Product): Promise<void>;
}
