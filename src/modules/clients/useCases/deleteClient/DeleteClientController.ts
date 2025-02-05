import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteClientUseCase } from './DeleteClientUseCase'
import { HttpStatusCode } from '../../../../shared/types'

export class DeleteClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    const deleteClientUseCase = container.resolve(DeleteClientUseCase)

    const data = await deleteClientUseCase.execute(id)

    return response.status(HttpStatusCode.OK).json(data)
  }
}
