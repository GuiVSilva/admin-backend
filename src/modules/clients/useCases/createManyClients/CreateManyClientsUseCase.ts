import { inject, injectable } from 'tsyringe'
import { IClientRepository } from '../../repositories/IClientRepository'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

interface IRequest {
  Nome: string
  'CPF/CNPJ': string
  Email: string
  Celular: string
  CEP: string
  Endereço: string
  Complemento: string
  Bairro: string
  Cidade: string
  Estado: string
  Número: string
}

@injectable()
export class CreateManyClientsUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute(json: IRequest[], user: string): Promise<void> {
    for (const client of json) {
      const name = client.Nome
      const cnpf_cnpj = client['CPF/CNPJ']
      const email = client.Email
      const cellPhone = client.Celular
      const cep = client.CEP
      const address = client['Endereço']
      const complementar = client.Complemento
      const neighborhood = client.Bairro
      const city = client.Cidade
      const state = client.Estado
      const house_number = client.Número

      try {
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
      } catch (error) {
        throw new BadRequestException('Erro ao cadastrar cliente')
      }
    }
  }
}
