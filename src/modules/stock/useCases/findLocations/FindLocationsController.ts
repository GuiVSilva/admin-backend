import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindLocatiosUseCase } from './FindLocatiosUseCase'
import { HttpStatusCode } from '../../../../shared/types'

export class FindLocationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findLocatiosUseCase = container.resolve(FindLocatiosUseCase)

    const data = await findLocatiosUseCase.execute()

    return response.status(HttpStatusCode.CREATED).json(data)
  }
}
