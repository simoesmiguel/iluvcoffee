"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeRefactor1714729112614 = void 0;
class CoffeeRefactor1714729112614 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }
}
exports.CoffeeRefactor1714729112614 = CoffeeRefactor1714729112614;
//# sourceMappingURL=1714729112614-CoffeeRefactor.js.map