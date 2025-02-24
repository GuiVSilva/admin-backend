import { Request, Response, NextFunction } from 'express'
import { BadRequestException } from '../errors/http/BadRequestException'
import { HttpStatusCode } from '../types'

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof BadRequestException) {
    return response
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ message: error.message })
  }

  console.error('Erro interno no servidor:', error)

  return response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    message: 'Erro interno do servidor'
  })
}
