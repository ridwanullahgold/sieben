import * as Yup from 'yup'
import User from '@models/User'
import PasswordReset from '@models/PasswordReset'

const ForgotSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
})

export default async (req, res, next) => {
    const { email }  = req.body;
        try {

    await ForgotSchema.validate(req.body)
    const user = await User.findOne({email})
    if (!user) {
        throw new Yup.ValidationError(
            'This user does not exist.',
            req.body,
            'email'
        )
    }
    
    const existing = await PasswordReset.findOne({email})
    
    if (existing) {
        throw new Yup.ValidationError(
            'The password reset link has already been sent.',
            req.body,
            'email'
            )
        }

    req.user = user;

    return next()

}catch(error) {
            res.status(422).json({
                [error.path]: error.message
            })
}
}