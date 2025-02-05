import { Router, Request, Response } from 'express'
import { ClientController } from '../../modules/clients/useCases/createClient/CreateClientController'
import { FindClientsController } from '../../modules/clients/useCases/findClients/FindClientsController'
import { UpdateClientController } from '../../modules/clients/useCases/updateClient/UpdateClientController'
import { DeleteClientController } from '../../modules/clients/useCases/deleteClient/DeleteClientController'

const clientRoutes = Router()

const clientController = new ClientController()
const findClientsController = new FindClientsController()
const updateClientController = new UpdateClientController()
const deleteClientController = new DeleteClientController()

clientRoutes.post(
  '/create-client',
  async (request: Request, response: Response) => {
    await clientController.handle(request, response)
  }
)
clientRoutes.get(
  '/find-clients',
  async (request: Request, response: Response) => {
    await findClientsController.handle(request, response)
  }
)

clientRoutes.put(
  '/update-client',
  async (request: Request, response: Response) => {
    await updateClientController.handle(request, response)
  }
)

clientRoutes.delete(
  '/delete-client',
  async (request: Request, response: Response) => {
    await deleteClientController.handle(request, response)
  }
)
export { clientRoutes }
