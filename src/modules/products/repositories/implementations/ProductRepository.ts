import { Repository } from 'typeorm'
import { Products } from '../../entities/Products'
import { IProductRepository } from '../IProductRepository'
import { AppDataSource } from '../../../../data-source'
import { ICreateProductDTO } from '../../dtos/ICreateProductDTO'

export class ProductRepository implements IProductRepository {
  private repository: Repository<Products>

  constructor() {
    this.repository = AppDataSource.getRepository(Products)
  }

  async create(data: ICreateProductDTO): Promise<void> {
    const product = this.repository.create(data)

    await this.repository.save(product)
  }

  async findByName(name: string): Promise<Products | null> {
    return this.repository.findOne({ where: { name } })
  }

  async find(): Promise<Products[]> {
    return this.repository.find({ where: { active: true } })
  }

  async update(product: Products): Promise<void> {
    await this.repository.save(product)
  }

  async delete(id: number): Promise<void> {
    await this.repository.update(id, { active: false })
  }
}
