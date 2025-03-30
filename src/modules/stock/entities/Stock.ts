import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Products } from '../../products/entities/Products'
import { StockLocations } from './StockLocations'

@Entity('stock')
export class Stock {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  id_product: number

  @Column()
  id_location: number

  @Column()
  quantity: number

  @Column({ default: true })
  active: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Column()
  created_by: string

  @ManyToOne(() => Products)
  @JoinColumn({ name: 'id_product' })
  product: Products

  @ManyToOne(() => StockLocations)
  @JoinColumn({ name: 'id_location' })
  locations: StockLocations
}
