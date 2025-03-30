import { ICreateProductDTO } from '../dtos/ICreateProductDTO'
import { Products } from '../entities/Products'

export interface IProductRepository {
  create(data: ICreateProductDTO): Promise<void>
  findByName(name: string): Promise<Products | null>
  find(): Promise<Products[]>
  update(product: Products): Promise<void>
  delete(id: number): Promise<void>
}
