export class BadRequestException extends Error {
  public readonly statusCode: number

  constructor(message: string) {
    super(message)
    this.statusCode = 400
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
