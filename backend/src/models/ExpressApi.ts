import { Prisma } from '@prisma/client'
import { errors } from '@vinejs/vine'
import { Request, Response } from 'express'

export class ExpressApi {
  public req: Request
  public res: Response
  constructor(req: Request, res: Response) {
    this.req = req
    this.res = res
  }

  protected handleError(error: unknown) {
    console.error(error)

    if (error instanceof errors.E_VALIDATION_ERROR) {
      return this.res.status(400).json({
        message: error.message,
      })
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return this.res.status(500).json({
        message: error.meta!.cause,
      })
    }
    return this.res.status(500).json({
      message: 'Unknown Error',
    })
  }
}
