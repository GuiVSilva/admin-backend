import { Router, Request, Response } from 'express'
import { CreateProductController } from '../../modules/products/useCases/createProduct/CreateProductController'
import { FindProductsController } from '../../modules/products/useCases/findProducts/FindProductsController'
import { UpdateProductController } from '../../modules/products/useCases/updateProduct/UpdateProductController'
import { DeleteProductController } from '../../modules/products/useCases/deleteProduct/DeleteProductController'

const productRoutes = Router()

const createProductController = new CreateProductController()
const findProductsController = new FindProductsController()
const updateProductController = new UpdateProductController()
const deleteProductController = new DeleteProductController()

productRoutes.post(
  '/create-product',
  async (request: Request, response: Response) => {
    await createProductController.handle(request, response)
  }
)

productRoutes.get(
  '/find-products',
  async (request: Request, response: Response) => {
    await findProductsController.handle(request, response)
  }
)

productRoutes.put(
  '/update-product',
  async (request: Request, response: Response) => {
    await updateProductController.handle(request, response)
  }
)

productRoutes.delete(
  '/delete-product',
  async (request: Request, response: Response) => {
    await deleteProductController.handle(request, response)
  }
)

export { productRoutes }
