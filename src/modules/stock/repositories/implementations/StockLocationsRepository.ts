import { Repository } from 'typeorm'
import { StockLocations } from '../../entities/StockLocations'
import { IStockLocationsRepository } from '../IStockLocationsRepository'
import { AppDataSource } from '../../../../data-source'
import { ICreateStockLocationDTO } from '../../dtos/ICreateStockLocationDTO'

export class StockLocationsRepository implements IStockLocationsRepository {
  private repository: Repository<StockLocations>

  constructor() {
    this.repository = AppDataSource.getRepository(StockLocations)
  }

  async create(data: ICreateStockLocationDTO): Promise<void> {
    const stockLocation = this.repository.create(data)

    await this.repository.save(stockLocation)
  }

  async findByName(name: string): Promise<StockLocations | null> {
    return this.repository.findOne({ where: { name, active: true } })
  }

  async find(): Promise<StockLocations[]> {
    return this.repository.find({ where: { active: true } })
  }

  async update(id: number, name: string): Promise<void> {
    await this.repository.update(id, { name })
  }

  async delete(id: number): Promise<void> {
    await this.repository.update(id, { active: false })
  }
}
