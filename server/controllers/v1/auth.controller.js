import authRouter from '../../routes/v1/auth'
import User from '@models/User'
import PasswordReset from '@models/PasswordReset'
import Bcrypt from 'bcryptjs';
const login = async (req, res) => {
const { email, password, type } = req.body
    const user = await User.findOne({ email, type }).select('+password')
    if(!email || !password){
        return res.status(400).json({
            email: 'These credentials do not match our records.'
        })
      }

    if (user) {
        if (user.comparePasswords(password)) {
            const token = user.generateToken()
            return res.json({
                user,
                token
            })
        }
    }

    return res.status(400).json({
        email: 'These credentials do not match our records.'
    })
}

const register = async (req, res) => {
    const {name, email, password, category, phone, type} = req.body
    const user = await User.create({
        name,
        email,
        password,
        category,
        phone,
        type
    })
    const token = user.generateToken()
    return res.status(201).json({user, token})
}

const forgotPassword = async (req, res) => {
    await req.user.forgotPassword()

    return res.status(201).json({
        message: "Password Reset Link sent"
    })
}

const resetPassword = async (req, res) => {
    const {user} = req

    await User.findOneAndUpdate({
        email : user.email,
    },
    {
        password : Bcrypt.hashSync(req.body.password)
    })

    await PasswordReset.findOneAndDelete({email:user.email})

    return res.status(201).json({
        message: "Password Reset Successfully"
    })
}
const confirmEmail = async (req, res) => {
    const user = await User.findOneAndUpdate({
        email: req.user.email
    }, {
        emailConfirmCode: null,
        emailConfirmedAt: new Date()
    }, { new: true })

    const token = user.generateToken()

    return res.json({
        user,
        token
    })
}

export default {
    login,
    register,
    forgotPassword,
    resetPassword,
    confirmEmail
}
