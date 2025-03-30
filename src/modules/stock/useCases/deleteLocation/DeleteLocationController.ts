import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteLocationUseCase } from './DeleteLocationUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class DeleteLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body

      const deleteLocationUseCase = container.resolve(DeleteLocationUseCase)

      await deleteLocationUseCase.execute({
        id
      })

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Local deletado com sucesso!' })
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
