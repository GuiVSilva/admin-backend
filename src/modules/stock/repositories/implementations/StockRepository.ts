import { Repository } from 'typeorm'
import { Stock } from '../../entities/Stock'
import { IStockRepository } from '../IStockRepository'
import { AppDataSource } from '../../../../data-source'
import { ICreateStockDTO } from '../../dtos/ICreateStockDTO'

export class StockRepository implements IStockRepository {
  private repository: Repository<Stock>

  constructor() {
    this.repository = AppDataSource.getRepository(Stock)
  }

  async create(data: ICreateStockDTO): Promise<void> {
    const stock = this.repository.create(data)

    await this.repository.save(stock)
  }

  async find(): Promise<Stock[]> {
    return this.repository.find({
      where: { active: true },
      relations: ['locations', 'product']
    })
  }

  async findByProductAndLocation(
    id_product: number,
    id_location: number
  ): Promise<Stock | null> {
    return this.repository.findOne({
      where: {
        id_product,
        id_location,
        active: true
      }
    })
  }

  async updateQuantity(id_moviment: number, quantity: number): Promise<void> {
    await this.repository.update(id_moviment, { quantity: quantity })
  }
}
