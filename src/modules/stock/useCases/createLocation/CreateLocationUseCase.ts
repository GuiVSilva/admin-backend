import { inject, injectable } from 'tsyringe'
import { IStockLocationsRepository } from '../../repositories/IStockLocationsRepository'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

interface IRequest {
  local: string
  user: string
}

@injectable()
export class CreateLocationUseCase {
  constructor(
    @inject('StockLocationsRepository')
    private stockLocationsRepository: IStockLocationsRepository
  ) {}

  async execute({ local, user }: IRequest): Promise<void> {
    const location = await this.stockLocationsRepository.findByName(local)

    if (location) throw new BadRequestException('Esse local já foi cadastrado!')

    await this.stockLocationsRepository.create({
      name: local,
      created_by: user
    })
  }
}
