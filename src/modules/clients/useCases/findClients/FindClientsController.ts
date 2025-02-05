import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindClientsUseCase } from './FindClientsUseCase'
import { HttpStatusCode } from '../../../../shared/types'

export class FindClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findClientsUseCase = container.resolve(FindClientsUseCase)

    const data = await findClientsUseCase.execute()

    return response.status(HttpStatusCode.OK).json(data)
  }
}
