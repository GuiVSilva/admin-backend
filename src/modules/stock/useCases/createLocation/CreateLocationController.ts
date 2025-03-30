import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateLocationUseCase } from './CreateLocationUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class CreateLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { local, user } = request.body

      const createLocationUseCase = container.resolve(CreateLocationUseCase)

      await createLocationUseCase.execute({
        local,
        user
      })

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Local cadastrado com sucesso!' })
    } catch (error: any) {
      if (error instanceof BadRequestException) {
        return response
          .status(HttpStatusCode.BAD_REQUEST)
          .json({ message: error.message })
      }

      return response
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: error.message })
    }
  }
}
