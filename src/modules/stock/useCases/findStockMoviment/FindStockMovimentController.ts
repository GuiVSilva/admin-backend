import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindStockMovimentUseCase } from './FindStockMovimentUseCase'
import { HttpStatusCode } from '../../../../shared/types'

export class FindStockMovimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findStockMovimentUseCase = container.resolve(FindStockMovimentUseCase)

    const data = await findStockMovimentUseCase.execute()

    return response.status(HttpStatusCode.CREATED).json(data)
  }
}
