import express from 'express'
import { PostController } from '../controllers/postController'
import { Prisma } from '@prisma/client'
const postRouter = express.Router()

postRouter.get('/', async (req, res) => {
  const postController = new PostController(req, res)
  try {
    await postController.getAllPostsApi()
  } catch (error) {
    console.error(error)

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(500).json({
        message: error.meta!.cause,
      })
    }
    return res.status(500).json({
      message: 'Unknown Error',
    })
  }
})

export default postRouter
