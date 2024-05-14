import express from 'express'
import { UserController } from '../controllers/userController'
import { errors } from '@vinejs/vine'

const userRouter = express.Router()

userRouter.post('/', async (req, res) => {
  const userController = new UserController(req, res)
  try {
    await userController.createUserApi()
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      console.log(error.messages)
    }
  }
})

export default userRouter
