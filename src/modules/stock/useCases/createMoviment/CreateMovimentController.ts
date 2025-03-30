import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateMovimentUseCase } from './CreateMovimentUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class CreateMovimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id_product, id_location, quantity, user, type_moviment } =
        request.body

      const createMovimentUseCase = container.resolve(CreateMovimentUseCase)

      await createMovimentUseCase.execute({
        id_product,
        id_location,
        quantity,
        user,
        type_moviment
      })

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Movimentação regisrada com sucesso!' })
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
