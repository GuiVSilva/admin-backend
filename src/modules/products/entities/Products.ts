import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('products')
export class Products {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  mark: string

  @Column()
  cost_price: number

  @Column()
  sale_price: number

  @Column()
  description: string

  @Column({ default: true })
  active: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Column()
  created_by: string
}
