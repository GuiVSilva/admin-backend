import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateManyClientsUseCase } from './CreateManyClientsUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class CreateManyClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { json, user } = request.body

      const createManyClientsUseCase = container.resolve(
        CreateManyClientsUseCase
      )

      await createManyClientsUseCase.execute(json, user)

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
