import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

interface IRequest {
  name: string
  cnpf_cnpj: string
  email: string
  cellPhone: string
  cep: string
  address: string
  complementar: string
  neighborhood: string
  city: string
  state: string
  house_number: string
  user: string
}

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute({
    name,
    cnpf_cnpj,
    email,
    cellPhone,
    cep,
    address,
    complementar,
    neighborhood,
    city,
    state,
    house_number,
    user
  }: IRequest): Promise<void> {
    const client = await this.clientRepository.findByName(name)

    if (client?.name === name) {
      throw new BadRequestException('Cliente com esse nome já existe!')
    }

    if (client?.cnpf_cnpj === cnpf_cnpj) {
      throw new BadRequestException('Cliente com esse CNPJ/CPF já existe!')
    }

    await this.clientRepository.create({
      name,
      cnpf_cnpj,
      email,
      cellPhone,
      cep,
      address,
      complementar,
      neighborhood,
      city,
      state,
      house_number,
      user
    })
  }
}
