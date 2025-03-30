import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTableStock1743369627366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stock',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'id_product',
            type: 'int',
            isNullable: false
          },
          {
            name: 'id_location',
            type: 'int',
            isNullable: false
          },
          {
            name: 'quantity',
            type: 'int',
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
        ],
        foreignKeys: [
          {
            name: 'fk_id_product',
            columnNames: ['id_product'],
            referencedTableName: 'products',
            referencedColumnNames: ['id']
          },
          {
            name: 'fk_id_location',
            columnNames: ['id_location'],
            referencedTableName: 'stock_locations',
            referencedColumnNames: ['id']
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('stock', 'fk_id_product')
    await queryRunner.dropForeignKey('stock', 'fk_id_location')
    await queryRunner.dropTable('stock')
  }
}
