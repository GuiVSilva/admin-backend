import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'

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
