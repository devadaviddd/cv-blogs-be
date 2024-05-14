import { Request, Response } from 'express'
import { ExpressApi } from '../models/ExpressApi'
import { createUser } from '../apis/createUser'

export class UserController extends ExpressApi {
  constructor(req: Request, res: Response) {
    super(req, res)
  }

  public async createUserApi() {
    try {
      const user = await createUser(this.req.body)
      this.res.json(user)
    } catch (error) {
      this.handleError(error)
    }
  }
}
