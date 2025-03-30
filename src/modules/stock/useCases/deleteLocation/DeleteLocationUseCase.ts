import { inject, injectable } from 'tsyringe'
import { IStockLocationsRepository } from '../../repositories/IStockLocationsRepository'

interface IRequest {
  id: number
}

@injectable()
export class DeleteLocationUseCase {
  constructor(
    @inject('StockLocationsRepository')
    private stockLocationsRepository: IStockLocationsRepository
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    await this.stockLocationsRepository.delete(id)
  }
}
