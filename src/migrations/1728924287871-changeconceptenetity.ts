import { MigrationInterface, QueryRunner } from "typeorm";

export class Changeconceptenetity1728924287871 implements MigrationInterface {
    name = 'Changeconceptenetity1728924287871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Concepts\` DROP COLUMN \`value\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Concepts\` ADD \`value\` double(10,2) NOT NULL`);
    }

}
