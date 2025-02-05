import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'
import { IUpdateClientDTO } from '../../dtos/IUpdateClientDTO'

@injectable()
export class UpdateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(data: IUpdateClientDTO): Promise<void> {
    await this.clientRepository.update(data)
  }
}
