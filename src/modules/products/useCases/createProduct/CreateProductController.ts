import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateProductUseCase } from './CreateProductUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, mark, cost_price, sale_price, description, user } =
        request.body

      const createProductUseCase = container.resolve(CreateProductUseCase)

      await createProductUseCase.execute({
        name,
        mark,
        cost_price,
        sale_price,
        description,
        user
      })

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Produto cadastrado com sucesso!' })
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
