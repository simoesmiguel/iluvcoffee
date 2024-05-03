import { CoffeeRefactor1714729112614 } from "src/migrations/1714729112614-CoffeeRefactor";
import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pass123",
  database: "postgres",
  entities: [],
  migrations: [CoffeeRefactor1714729112614],
});
