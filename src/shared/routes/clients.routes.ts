import { Router, Request, Response } from 'express'
import { ClientController } from '../../modules/clients/useCases/createClient/CreateClientController'

const clientRoutes = Router()

const clientController = new ClientController()

clientRoutes.post(
  '/create-client',
  async (request: Request, response: Response) => {
    await clientController.handle(request, response)
  }
)

export { clientRoutes }
