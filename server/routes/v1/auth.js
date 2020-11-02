import { Router } from 'express'
import authController from '@controllers/v1/auth.controller'
import registerValidator from '@validators/register'
import forgotValidator from '@validators/forgot'
import loginValidator from '@validators/login'
import resetValidator from '@validators/reset'
import emailConfirmValidator from '@validators/email-confirm'
const authRouter = new Router()

authRouter.post('/login', loginValidator, authController.login)
authRouter.post('/register', registerValidator, authController.register)
authRouter.post('/passwords/email', forgotValidator, authController.forgotPassword)
authRouter.post('/passwords/reset', resetValidator, authController.resetPassword)
authRouter.post('/emails/confirm', emailConfirmValidator, authController.confirmEmail)

export default authRouter
