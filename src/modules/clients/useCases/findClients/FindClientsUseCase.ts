import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'
import { Client } from '../../entities/Client'

@injectable()
export class FindClientsUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(): Promise<Client[]> {
    return await this.clientRepository.find()
  }
}
