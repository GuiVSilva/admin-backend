import { inject, injectable } from 'tsyringe'
import { IProductRepository } from '../../repositories/IProductRepository'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'
import { Products } from '../../entities/Products'

interface IRequest {
  id: number
  name: string
  mark: string
  cost_price: number
  sale_price: number
  description: string
}

@injectable()
export class UpdateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute({
    id,
    name,
    mark,
    cost_price,
    sale_price,
    description
  }: IRequest): Promise<void> {
    const existingProduct = await this.productRepository.findByName(name)

    if (existingProduct && existingProduct.id !== id) {
      throw new BadRequestException('Já existe um produto com este nome.')
    }
    const product = new Products()
    product.id = id
    product.name = name
    product.mark = mark
    product.cost_price = cost_price
    product.sale_price = sale_price
    product.description = description

    await this.productRepository.update(product)
  }
}
