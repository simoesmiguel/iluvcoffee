"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1714729112614_CoffeeRefactor_1 = require("./src/migrations/1714729112614-CoffeeRefactor");
const typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pass123",
    database: "postgres",
    entities: [],
    migrations: [_1714729112614_CoffeeRefactor_1.CoffeeRefactor1714729112614],
});
//# sourceMappingURL=typeorm-cli.config.js.map