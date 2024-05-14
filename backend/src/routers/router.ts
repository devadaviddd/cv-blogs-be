import express  from 'express';
import postRouter from './postRouter';
import userRouter from './userRouter';
const router = express.Router()

router.use('/post', postRouter)
router.use('/user', userRouter )
export default router