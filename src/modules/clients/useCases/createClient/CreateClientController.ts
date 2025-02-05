import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateClientUseCase } from './CreateClientUseCase'
import { HttpStatusCode } from '../../../../shared/types'

export class ClientController {
  async handle(request: Request, response: Response): Promise<Response> {
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
    const data = await createClientUseCase.execute({
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
    return response.status(HttpStatusCode.OK).json(data)
  }
}
