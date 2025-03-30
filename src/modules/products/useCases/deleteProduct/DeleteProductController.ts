import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteProductUseCase } from './DeleteProductUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.body

      const deleteProductUseCase = container.resolve(DeleteProductUseCase)

      await deleteProductUseCase.execute(id)

      return response
        .status(HttpStatusCode.CREATED)
        .json({ message: 'Produto deletado com sucesso!' })
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
