import { Repository } from 'typeorm'
import { IClientRepository } from '../IClientRepository'
import { AppDataSource } from '../../../../data-source'
import { Client } from '../../entities/Client'
import { ICreateClientDTO } from '../../dtos/ICreateClientDTO'
import { IUpdateClientDTO } from '../../dtos/IUpdateClientDTO'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class ClientRepository implements IClientRepository {
  private repository: Repository<Client>

  constructor() {
    this.repository = AppDataSource.getRepository(Client)
  }

  async create(data: ICreateClientDTO): Promise<void> {
    const client = this.repository.create({
      name: data.name,
      cnpf_cnpj: data.cnpf_cnpj,
      email: data.email,
      cellPhone: data.cellPhone,
      cep: data.cep,
      address: data.address,
      complementar: data.complementar,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      house_number: data.house_number,
      created_by: data.user
    })

    await this.repository.save(client)
  }

  async find(): Promise<Client[]> {
    return this.repository.find({ where: { active: true } })
  }

  async update(data: IUpdateClientDTO): Promise<void> {
    await this.repository.update(data.id, {
      name: data.name,
      cnpf_cnpj: data.cnpf_cnpj,
      email: data.email,
      cellPhone: data.cellPhone,
      cep: data.cep,
      address: data.address,
      complementar: data.complementar,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      house_number: data.house_number
    })
  }

  async delete(id: number): Promise<void> {
    await this.repository.update(id, { active: false })
  }

  async findByName(name: string): Promise<Client | null> {
    return this.repository.findOne({ where: { name, active: true } })
  }

  async findById(id: number): Promise<Client | null> {
    return this.repository.findOne({ where: { id, active: true } })
  }
}
