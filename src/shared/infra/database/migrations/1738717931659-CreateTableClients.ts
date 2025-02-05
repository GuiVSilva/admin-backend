import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableClients1738717931659 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'cnpf_cnpj',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'cellPhone',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'complementar',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'neighborhood',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'house_number',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'active',
            type: 'boolean',
            default: true
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
          {
            name: 'created_by',
            type: 'varchar',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients')
  }
}
