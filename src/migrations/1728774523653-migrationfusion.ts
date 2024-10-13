import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrationfusion1728774523653 implements MigrationInterface {
    name = 'Migrationfusion1728774523653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Brand\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Invoices\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`vehicleTypeId\` bigint NOT NULL, \`plateLicence\` varchar(255) NOT NULL, \`brandId\` bigint NOT NULL, \`userCreatedId\` bigint NOT NULL, \`employeedId\` bigint NOT NULL, \`invoiceStatusId\` bigint NOT NULL, \`vehiculeStatus\` varchar(255) NOT NULL, \`amont\` double(10,2) NOT NULL, \`customerId\` bigint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`employeeId\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_ab59c0fa1574b39117759bf28cf\` FOREIGN KEY (\`vehicleTypeId\`) REFERENCES \`VehicleType\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_1ce76089d5fd0575434535454c2\` FOREIGN KEY (\`userCreatedId\`) REFERENCES \`Users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_e9f438380de6a0fe0b4cf59b537\` FOREIGN KEY (\`brandId\`) REFERENCES \`Brand\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_a05d75c3caee286505f171a8490\` FOREIGN KEY (\`invoiceStatusId\`) REFERENCES \`InvoicesStatus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_e0c90eab4b6d2361604e54a4e1c\` FOREIGN KEY (\`customerId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Invoices\` ADD CONSTRAINT \`FK_77edac1018cb8ac2b758053ac98\` FOREIGN KEY (\`employeeId\`) REFERENCES \`Users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_77edac1018cb8ac2b758053ac98\``);
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_e0c90eab4b6d2361604e54a4e1c\``);
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_a05d75c3caee286505f171a8490\``);
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_e9f438380de6a0fe0b4cf59b537\``);
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_1ce76089d5fd0575434535454c2\``);
        await queryRunner.query(`ALTER TABLE \`Invoices\` DROP FOREIGN KEY \`FK_ab59c0fa1574b39117759bf28cf\``);
        await queryRunner.query(`DROP TABLE \`Invoices\``);
        await queryRunner.query(`DROP TABLE \`Brand\``);
    }

}
