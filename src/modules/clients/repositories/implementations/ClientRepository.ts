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
    const existingClient = await this.repository.findOne({
      where: { id: data.id }
    })

    if (!existingClient) {
      throw new BadRequestException('Cliente não encontrado')
    }

    await this.repository.save({ ...existingClient, ...data })
  }

  async delete(id: number): Promise<void> {
    const client = await this.repository.findOne({ where: { id } })
    if (!client) {
      throw new BadRequestException('Cliente não encontrado')
    }
    client.active = false
    await this.repository.save(client)
  }

  async findByName(name: string): Promise<Client | null> {
    return this.repository.findOne({ where: { name } })
  }
}
