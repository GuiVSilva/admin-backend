import { inject, injectable } from 'tsyringe'
import { IProductRepository } from '../../repositories/IProductRepository'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

interface IRequest {
  name: string
  mark: string
  cost_price: number
  sale_price: number
  description: string
  user: string
}

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}

  async execute({
    name,
    mark,
    cost_price,
    sale_price,
    description,
    user
  }: IRequest): Promise<void> {
    const product = await this.productRepository.findByName(name)

    if (product)
      throw new BadRequestException('Já existe um produto com esse nome!')

    await this.productRepository.create({
      name,
      mark,
      cost_price,
      sale_price,
      description,
      created_by: user
    })
  }
}
