import { Request,   Response } from 'express'
import { getAllPosts } from '../apis/getAllPosts'

export class PostController {
  public req: Request
  public res: Response
  constructor(req: Request, res: Response) {
    this.req = req
    this.res = res
  }

  public async getAllPostsApi() {
    const posts = await getAllPosts()
    this.res.json(posts)
  }
}
