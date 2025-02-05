import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateClientUseCase } from './UpdateClientUseCase'
import { HttpStatusCode } from '../../../../shared/types'

export class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateClientUseCase = container.resolve(UpdateClientUseCase)

    await updateClientUseCase.execute(request.body)
    return response
      .status(HttpStatusCode.OK)
      .json({ message: 'Cliente atualizado com sucesso' })
  }
}
