import { Router } from 'express'
import { clientRoutes } from './clients.routes'
import { productRoutes } from './products.routes'
import { stockRoutes } from './stock.routes'

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/products', productRoutes)
routes.use('/stock', stockRoutes)

export { routes }
