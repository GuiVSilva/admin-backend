import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'
import { IUpdateClientDTO } from '../../dtos/IUpdateClientDTO'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

@injectable()
export class UpdateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(data: IUpdateClientDTO): Promise<void> {
    const client = await this.clientRepository.findById(data.id)

    if (!client) throw new BadRequestException('Cliente não encontrado')

    if (client.id !== data.id) {
      throw new BadRequestException('Já existe um cliente com este nome.')
    }

    if (client.cnpf_cnpj !== data.cnpf_cnpj) {
      throw new BadRequestException('Já existe um cliente com este CNPJ/CPF.')
    }

    await this.clientRepository.update(data)
  }
}
