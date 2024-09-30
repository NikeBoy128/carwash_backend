import { MigrationInterface, QueryRunner } from 'typeorm';

export class Addrolesentites1727667975925 implements MigrationInterface {
  name = 'Addrolesentites1727667975925';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`Roles\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`RolesUser\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`userId\` bigint NOT NULL, \`roleId\` bigint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`Users\` CHANGE \`id\` \`id\` int NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`Users\` DROP PRIMARY KEY`);
    await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`id\``);
    await queryRunner.query(
      `ALTER TABLE \`Users\` ADD \`id\` bigint NOT NULL PRIMARY KEY AUTO_INCREMENT`,
    );
    await queryRunner.query(
      `ALTER TABLE \`RolesUser\` ADD CONSTRAINT \`FK_e679da7709b7d96fa5f66ffc59f\` FOREIGN KEY (\`userId\`) REFERENCES \`Users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`RolesUser\` ADD CONSTRAINT \`FK_20e333d7e9e22feef025eaa6f51\` FOREIGN KEY (\`roleId\`) REFERENCES \`Roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`RolesUser\` DROP FOREIGN KEY \`FK_20e333d7e9e22feef025eaa6f51\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`RolesUser\` DROP FOREIGN KEY \`FK_e679da7709b7d96fa5f66ffc59f\``,
    );
    await queryRunner.query(`ALTER TABLE \`Users\` DROP COLUMN \`id\``);
    await queryRunner.query(
      `ALTER TABLE \`Users\` ADD \`id\` int NOT NULL AUTO_INCREMENT`,
    );
    await queryRunner.query(`ALTER TABLE \`Users\` ADD PRIMARY KEY (\`id\`)`);
    await queryRunner.query(
      `ALTER TABLE \`Users\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`,
    );
    await queryRunner.query(`DROP TABLE \`RolesUser\``);
    await queryRunner.query(`DROP TABLE \`Roles\``);
  }
}
