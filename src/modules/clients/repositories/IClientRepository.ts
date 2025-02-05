import { ICreateClientDTO } from '../dtos/ICreateClientDTO'
import { IUpdateClientDTO } from '../dtos/IUpdateClientDTO'
import { Client } from '../entities/Client'

export interface IClientRepository {
  create(data: ICreateClientDTO): Promise<void>
  find(): Promise<Client[]>
  update(data: IUpdateClientDTO): Promise<void>
  delete(id: number): Promise<void>
}
