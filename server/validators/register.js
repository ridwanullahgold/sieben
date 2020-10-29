import * as Yup from 'yup'
import User from '@models/User'

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email('Must be a valid Email Address').required(),
    phone: Yup.string().required(),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required()
})

export default async (req, res, next) => {
    const { name, email, phone, category, password } = req.body

    try {
        await RegisterSchema.validate({ name, email, phone, password } )

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            throw new Yup.ValidationError(
                'This user already exists.',
                req.body,
                'email'
            )
        }
        return next()
    } catch (error) {
        return res.status(422).json({
            [error.path]: error.message
        })
    }
}