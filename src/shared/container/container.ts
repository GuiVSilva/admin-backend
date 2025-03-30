import { container } from 'tsyringe'
import { IClientRepository } from '../../modules/clients/repositories/IClientRepository'
import { ClientRepository } from '../../modules/clients/repositories/implementations/ClientRepository'
import { ProductRepository } from '../../modules/products/repositories/implementations/ProductRepository'
import { IProductRepository } from '../../modules/products/repositories/IProductRepository'

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
)

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
)
