import { Repository } from 'typeorm'
import { IClientRepository } from '../IClientRepository'
import { AppDataSource } from '../../../../data-source'
import { Client } from '../../entities/Client'

export class ClientRepository implements IClientRepository {
  private repository: Repository<Client>

  constructor() {
    this.repository = AppDataSource.getRepository(Client)
  }

  async create(name: string, email: string, phone: string): Promise<void> {
    const client = this.repository.create({ name, email, phone })
    await this.repository.save(client)
  }
}
