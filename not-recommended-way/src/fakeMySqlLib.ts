import { Product } from "./product";

export class FakeMySqlLib {
  async query(sql: string) {
    console.log(`Query Executed: ${sql}`);
  }
}
