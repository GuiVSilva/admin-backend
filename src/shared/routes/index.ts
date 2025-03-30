import { Router } from 'express'
import { clientRoutes } from './clients.routes'
import { productRoutes } from './products.routes'

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/products', productRoutes)

export { routes }
