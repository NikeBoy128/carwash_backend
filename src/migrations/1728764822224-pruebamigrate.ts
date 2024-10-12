import { MigrationInterface, QueryRunner } from "typeorm";

export class Pruebamigrate1728764822224 implements MigrationInterface {
    name = 'Pruebamigrate1728764822224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Concepts\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`value\` double(10,2) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ConceptTypes\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`conceptId\` bigint NOT NULL, \`typeVehiculeId\` bigint NOT NULL, \`value\` double(10,2) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`VehicleType\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`label\` varchar(255) NOT NULL, \`icon\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Roles\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`RolesUser\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`userId\` bigint NOT NULL, \`roleId\` bigint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Users\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`password\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`phone\` bigint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`InvoicesStatus\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`label\` varchar(255) NOT NULL, \`icon\` varchar(255) NOT NULL, \`code\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`ConceptTypes\` ADD CONSTRAINT \`FK_cbc9c450845c3a8b170d2fae8a7\` FOREIGN KEY (\`conceptId\`) REFERENCES \`Concepts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ConceptTypes\` ADD CONSTRAINT \`FK_c90d5ef34f184a587efddde364c\` FOREIGN KEY (\`typeVehiculeId\`) REFERENCES \`VehicleType\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`RolesUser\` ADD CONSTRAINT \`FK_e679da7709b7d96fa5f66ffc59f\` FOREIGN KEY (\`userId\`) REFERENCES \`Users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`RolesUser\` ADD CONSTRAINT \`FK_20e333d7e9e22feef025eaa6f51\` FOREIGN KEY (\`roleId\`) REFERENCES \`Roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`RolesUser\` DROP FOREIGN KEY \`FK_20e333d7e9e22feef025eaa6f51\``);
        await queryRunner.query(`ALTER TABLE \`RolesUser\` DROP FOREIGN KEY \`FK_e679da7709b7d96fa5f66ffc59f\``);
        await queryRunner.query(`ALTER TABLE \`ConceptTypes\` DROP FOREIGN KEY \`FK_c90d5ef34f184a587efddde364c\``);
        await queryRunner.query(`ALTER TABLE \`ConceptTypes\` DROP FOREIGN KEY \`FK_cbc9c450845c3a8b170d2fae8a7\``);
        await queryRunner.query(`DROP TABLE \`InvoicesStatus\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
        await queryRunner.query(`DROP TABLE \`RolesUser\``);
        await queryRunner.query(`DROP TABLE \`Roles\``);
        await queryRunner.query(`DROP TABLE \`VehicleType\``);
        await queryRunner.query(`DROP TABLE \`ConceptTypes\``);
        await queryRunner.query(`DROP TABLE \`Concepts\``);
    }

}
