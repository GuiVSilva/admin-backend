import { inject, injectable } from 'tsyringe'
import { IProductRepository } from '../../repositories/IProductRepository'

@injectable()
export class DeleteProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute(id: number): Promise<void> {
    await this.productRepository.delete(id)
  }
}
