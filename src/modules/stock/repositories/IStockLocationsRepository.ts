import { ICreateStockLocationDTO } from '../dtos/ICreateStockLocationDTO'
import { StockLocations } from '../entities/StockLocations'

export interface IStockLocationsRepository {
  create(data: ICreateStockLocationDTO): Promise<void>
  findByName(name: string): Promise<StockLocations | null>
  find(): Promise<StockLocations[]>
  update(id: number, name: string): Promise<void>
  delete(id: number): Promise<void>
}
