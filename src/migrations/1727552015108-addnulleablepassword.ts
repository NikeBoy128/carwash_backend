import { MigrationInterface, QueryRunner } from "typeorm";

export class Addnulleablepassword1727552015108 implements MigrationInterface {
    name = 'Addnulleablepassword1727552015108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`password\` \`password\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Users\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`);
    }

}
