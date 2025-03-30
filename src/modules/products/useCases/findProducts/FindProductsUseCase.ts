import { inject, injectable } from 'tsyringe'
import { IProductRepository } from '../../repositories/IProductRepository'
import { Products } from '../../entities/Products'

@injectable()
export class FindProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(): Promise<Products[]> {
    const response = await this.productRepository.find()
    return response
  }
}
