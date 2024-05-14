import express from 'express'
import multer from 'multer'
import { PostController } from '../controllers/postController'

const postRouter = express.Router()
const upload = multer({ dest: 'storage/' })

postRouter.get('/', async (req, res) => {
  const postController = new PostController(req, res)
  await postController.getAllPostsApi()
})

postRouter.post('/simple', async (req, res) => {
  const postController = new PostController(req, res)
  await postController.createSimplePostApi()
})

postRouter.put('/content/:id', upload.single('content'), async (req, res) => {
  const postController = new PostController(req, res)
  await postController.updatePostContentApi()
})

export default postRouter
