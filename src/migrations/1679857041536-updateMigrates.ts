import { MigrationInterface, QueryRunner } from "typeorm";

export class updateMigrates1679857041536 implements MigrationInterface {
    name = 'updateMigrates1679857041536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "linkedin" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_368ca99acdbd5502fc08b3f7796" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "sector"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "sector" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "photo" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "sector"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "sector" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "photo" character varying(200) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "photo" character varying NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "sector"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "sector" character varying NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "photo" character varying NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "sector"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "sector" character varying NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_368ca99acdbd5502fc08b3f7796"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "linkedin"`);
    }

}
