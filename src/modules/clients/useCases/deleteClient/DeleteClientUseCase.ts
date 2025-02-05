import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'

@injectable()
export class DeleteClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(id: number): Promise<void> {
    await this.clientRepository.delete(id)
  }
}
