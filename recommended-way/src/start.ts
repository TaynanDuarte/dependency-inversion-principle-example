import { ProductMongodbRepository } from "./repositories/product.mongodb.repository";
import { ProductMysqlRepository } from "./repositories/product.mysql.repository";
import { ProductService } from "./services/product.service";

const MySqlRepository = new ProductMysqlRepository();
const MongoDBRepository = new ProductMongodbRepository();

const productService = new ProductService(MySqlRepository); // injecting MySql
// const productService = new ProductService(MongoDBRepository); // injecting MongoDB

productService.createProduct("computer", 3000);
