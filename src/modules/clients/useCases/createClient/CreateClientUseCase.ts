import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(name: string, email: string, phone: string): Promise<void> {
    await this.clientRepository.create(name, email, phone)
  }
}
