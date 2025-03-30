import { Router, Request, Response } from 'express'
import { CreateLocationController } from '../../modules/stock/useCases/createLocation/CreateLocationController'
import { FindLocationsController } from '../../modules/stock/useCases/findLocations/FindLocationsController'
import { UpdateLocationController } from '../../modules/stock/useCases/updateLocation/UpdateLocationController'
import { DeleteLocationController } from '../../modules/stock/useCases/deleteLocation/DeleteLocationController'
import { CreateMovimentController } from '../../modules/stock/useCases/createMoviment/CreateMovimentController'
import { FindStockMovimentController } from '../../modules/stock/useCases/findStockMoviment/FindStockMovimentController'

const stockRoutes = Router()

// STOCK/LOCATIONS ROUTES
const createLocationController = new CreateLocationController()
const findLocationsController = new FindLocationsController()
const updateLocationController = new UpdateLocationController()
const deleteLocationController = new DeleteLocationController()

//STOCK/MOVIMENT ROUTES
const createMovimentController = new CreateMovimentController()
const findStockMovimentController = new FindStockMovimentController()

// STOCK/LOCATIONS ROUTES
stockRoutes.post(
  '/create-location',
  async (request: Request, response: Response) => {
    await createLocationController.handle(request, response)
  }
)

stockRoutes.get(
  '/find-locations',
  async (request: Request, response: Response) => {
    await findLocationsController.handle(request, response)
  }
)

stockRoutes.put(
  '/update-location',
  async (request: Request, response: Response) => {
    await updateLocationController.handle(request, response)
  }
)

stockRoutes.delete(
  '/delete-location',
  async (request: Request, response: Response) => {
    await deleteLocationController.handle(request, response)
  }
)

//STOCK/MOVIMENT ROUTES
stockRoutes.post(
  '/create-movement',
  async (request: Request, response: Response) => {
    await createMovimentController.handle(request, response)
  }
)

stockRoutes.get(
  '/find-moviments',
  async (request: Request, response: Response) => {
    await findStockMovimentController.handle(request, response)
  }
)

export { stockRoutes }
