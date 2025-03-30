import { inject, injectable } from 'tsyringe'
import { IStockLocationsRepository } from '../../repositories/IStockLocationsRepository'
import { StockLocations } from '../../entities/StockLocations'

@injectable()
export class FindLocatiosUseCase {
  constructor(
    @inject('StockLocationsRepository')
    private stockLocationsRepository: IStockLocationsRepository
  ) {}

  async execute(): Promise<StockLocations[]> {
    return await this.stockLocationsRepository.find()
  }
}
