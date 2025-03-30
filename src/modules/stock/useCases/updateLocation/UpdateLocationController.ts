import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateLocationUseCase } from './UpdateLocationUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class UpdateLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id, local } = request.body

      const updateLocationUseCase = container.resolve(UpdateLocationUseCase)

      await updateLocationUseCase.execute({
        id,
        local
      })

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Local editado com sucesso!' })
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
