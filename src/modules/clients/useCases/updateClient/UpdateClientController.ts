import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateClientUseCase } from './UpdateClientUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const updateClientUseCase = container.resolve(UpdateClientUseCase)

      await updateClientUseCase.execute(request.body)

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Cliente cadastrado com sucesso!' })
    } catch (error) {
      if (error instanceof BadRequestException) {
        return response
          .status(HttpStatusCode.BAD_REQUEST)
          .json({ message: error.message })
      }

      return response
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: 'Erro interno do servidor' })
    }
  }
}
