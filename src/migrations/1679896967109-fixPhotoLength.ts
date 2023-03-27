import { MigrationInterface, QueryRunner } from "typeorm";

export class fixPhotoLength1679896967109 implements MigrationInterface {
    name = 'fixPhotoLength1679896967109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "photo" character varying(800) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "photo" character varying(800) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "photo" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "photo" character varying(200) NOT NULL`);
    }

}
