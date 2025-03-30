import { inject, injectable } from 'tsyringe'
import { IStockLocationsRepository } from '../../repositories/IStockLocationsRepository'

interface IRequest {
  id: number
  local: string
}

@injectable()
export class UpdateLocationUseCase {
  constructor(
    @inject('StockLocationsRepository')
    private stockLocationsRepository: IStockLocationsRepository
  ) {}

  async execute({ id, local }: IRequest): Promise<void> {
    await this.stockLocationsRepository.update(id, local)
  }
}
