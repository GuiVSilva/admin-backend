import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProductUseCase } from './UpdateProductUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id, name, mark, cost_price, sale_price, description } =
        request.body

      const updateProductUseCase = container.resolve(UpdateProductUseCase)

      await updateProductUseCase.execute({
        id,
        name,
        mark,
        cost_price,
        sale_price,
        description
      })

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Produto editado com sucesso!' })
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
