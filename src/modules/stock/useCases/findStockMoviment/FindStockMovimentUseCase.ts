import { inject, injectable } from 'tsyringe'
import { IStockRepository } from '../../repositories/IStockRepository'
import { Stock } from '../../entities/Stock'

@injectable()
export class FindStockMovimentUseCase {
  constructor(
    @inject('StockRepository')
    private stockRepository: IStockRepository
  ) {}

  async execute(): Promise<Stock[]> {
    return await this.stockRepository.find()
  }
}
