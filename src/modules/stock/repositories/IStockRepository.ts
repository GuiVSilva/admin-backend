import { ICreateStockDTO } from '../dtos/ICreateStockDTO'
import { Stock } from '../entities/Stock'

export interface IStockRepository {
  create(data: ICreateStockDTO): Promise<void>
  find(): Promise<Stock[]>
  findByProductAndLocation(
    id_product: number,
    id_location: number
  ): Promise<Stock | null>
  updateQuantity(id_moviment: number, quantity: number): Promise<void>
}
