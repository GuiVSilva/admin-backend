import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateClientUseCase } from './CreateClientUseCase'
import { HttpStatusCode } from '../../../../shared/types'
import { BadRequestException } from '../../../../shared/errors/http/BadRequestException'

export class ClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        cnpf_cnpj,
        email,
        cellPhone,
        cep,
        address,
        complementar,
        neighborhood,
        city,
        state,
        house_number,
        user
      } = request.body

      const createClientUseCase = container.resolve(CreateClientUseCase)

      await createClientUseCase.execute({
        name,
        cnpf_cnpj,
        email,
        cellPhone,
        cep,
        address,
        complementar,
        neighborhood,
        city,
        state,
        house_number,
        user
      })

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
