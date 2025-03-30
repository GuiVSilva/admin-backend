import { container } from 'tsyringe'
import { IClientRepository } from '../../modules/clients/repositories/IClientRepository'
import { ClientRepository } from '../../modules/clients/repositories/implementations/ClientRepository'
import { ProductRepository } from '../../modules/products/repositories/implementations/ProductRepository'
import { IProductRepository } from '../../modules/products/repositories/IProductRepository'
import { StockLocationsRepository } from '../../modules/stock/repositories/implementations/StockLocationsRepository'
import { IStockLocationsRepository } from '../../modules/stock/repositories/IStockLocationsRepository'
import { StockRepository } from '../../modules/stock/repositories/implementations/StockRepository'
import { IStockRepository } from '../../modules/stock/repositories/IStockRepository'

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
)

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
)

container.registerSingleton<IStockLocationsRepository>(
  'StockLocationsRepository',
  StockLocationsRepository
)

container.registerSingleton<IStockRepository>(
  'StockRepository',
  StockRepository
)
