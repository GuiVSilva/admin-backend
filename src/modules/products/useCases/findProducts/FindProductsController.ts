import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindProductsUseCase } from './FindProductsUseCase'
import { HttpStatusCode } from '../../../../shared/types'

export class FindProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findProductsUseCase = container.resolve(FindProductsUseCase)

    const data = await findProductsUseCase.execute()

    return response.status(HttpStatusCode.CREATED).json(data)
  }
}
