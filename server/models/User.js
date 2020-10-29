import config from '@config'
import Mail from '@fullstackjs/mail'
import Bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import randomstring from 'randomstring' 
import PasswordReset from '@models/PasswordReset'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    category: String,
    phone: String,
    password: String,
    type: String,
    createdAt: Date,
    updatedAt: Date,
    emailConfirmedAt: Date,
    emailConfirmCode: String
})

UserSchema.pre('save', function () {
    this.password = Bcrypt.hashSync(this.password)
    this.emailConfirmCode = randomstring.generate(72)
    this.createdAt = new Date()
})

// UserSchema.post('save', async function () {
//     await new Mail('confirm-account')
//         .to(this.email, this.name)
//         .subject('Please confirm your account')
//         .data({
//             name: this.name,
//             url: `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
//         })
//         .send()
// })

UserSchema.methods.generateToken = function() {
    return jwt.sign({id:this._id}, config.jwtSecret)
}
UserSchema.methods.comparePasswords = function(plainPassword) {
    return Bcrypt.compareSync(plainPassword, this.password)
}
UserSchema.methods.forgotPassword = async function() {
    const token = randomstring.generate(72)
    await PasswordReset.create({
        token,
        email:this.email,
        createdAt : new Date()
    })

    await new Mail('forgot-password')
    .to(this.email, this.name)
    .subject('Password Reset')
    .data({
        name: this.name,
        url: `${config.url}/auth/passwords/reset/${token}`
    })
    .send()
}

export default mongoose.model('User', UserSchema)