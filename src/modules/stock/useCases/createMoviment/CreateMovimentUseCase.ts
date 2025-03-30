import { inject, injectable } from 'tsyringe'
import { IStockRepository } from '../../repositories/IStockRepository'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

interface IRequest {
  id_product: number
  id_location: number
  quantity: number
  user: string
  type_moviment: number
}

@injectable()
export class CreateMovimentUseCase {
  constructor(
    @inject('StockRepository')
    private stockRepository: IStockRepository
  ) {}

  async execute({
    id_product,
    id_location,
    quantity,
    user,
    type_moviment
  }: IRequest): Promise<void> {
    if (quantity <= 0) {
      throw new BadRequestException('A quantidade deve ser maior que zero!')
    }

    const existingStock = await this.stockRepository.findByProductAndLocation(
      id_product,
      id_location
    )

    if (existingStock) {
      const newQuantity =
        type_moviment == 0
          ? existingStock.quantity + Number(quantity)
          : existingStock.quantity - Number(quantity)

      console.log('newQuantity', newQuantity)

      if (newQuantity < 0) {
        throw new BadRequestException(
          'Estoque insuficiente para essa movimentação!'
        )
      }

      return await this.stockRepository.updateQuantity(
        existingStock.id,
        newQuantity
      )
    }

    if (type_moviment === 1) {
      throw new BadRequestException(
        'Não é possível registrar saída sem estoque disponível!'
      )
    }

    await this.stockRepository.create({
      id_product,
      id_location,
      quantity,
      created_by: user
    })
  }
}
