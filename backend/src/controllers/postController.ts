import { Request, Response } from 'express'
import { getAllPosts } from '../apis/getAllPosts'
import { ExpressApi } from '../models/ExpressApi'
import { createSimplePost } from '../apis/createSimplePost'
import { updatePostContent } from '../apis/updatePostContent'

export class PostController extends ExpressApi {
  constructor(req: Request, res: Response) {
    super(req, res)
  }

  public async getAllPostsApi() {
    try {
      const posts = await getAllPosts()
      this.res.json(posts)
    } catch (error) {
      this.handleError(error)
    }
  }

  public async createSimplePostApi() {
    try {
      const post = await createSimplePost(this.req.body)
      this.res.json(post)
    } catch (error) {
      this.handleError(error)
    }
  }

  public async updatePostContentApi() {
    try {
      const id = Number(this.req.params.id)
      const content = await updatePostContent(this.req.file, id)
      this.res.json({
        content,
      })
    } catch (error) {
      this.handleError(error)
    }
  }
}
