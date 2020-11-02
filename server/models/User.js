import config from '@config'
import Mail from '@fullstackjs/mail'
import Bcrypt from 'bcryptjs'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import randomstring from 'randomstring' 
import PasswordReset from '@models/PasswordReset'
const nodemailer = require('nodemailer');
const ejs = require('ejs');
import sendEmail from '@config/mail'


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

UserSchema.post('save', async function () {
    const sendEmail = async options => {
        // 1) Create a transporter
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });  
        // 2) E-mail options
        const link = `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
        ejs.renderFile(__dirname + "/views/template.ejs", {name:this.name, link}, async function (err, data) {
            if (err) {  
            } else {
        const mailOptions = {
            from : 'Muyiwa Olugbebi <muyiwaolugbebi@gmail.com>',
            to:options.email,
            subject:options.subject,
            html:data
        }
        // 3) Actually send the mail
        await transporter.sendMail(mailOptions)
    }
    })
    }
    await sendEmail({
        email:this.email,
        subject: 'Please confirm your account',
    })
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
    
    const sendEmail = async options => {
        // 1) Create a transporter
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });  
        // 2) E-mail options
        const link = `${config.url}/auth/passwords/reset/${token}`
        const title='Reset Password';
        const message = "Please reset your password. The reset token will expire after 1 hour"
        ejs.renderFile(__dirname + "/views/reset.ejs", {name:this.name, link, title, message}, async function (err, data) {
            if (err) {  
            } else {
        const mailOptions = {
            from : 'Muyiwa Olugbebi <muyiwaolugbebi@gmail.com>',
            to:options.email,
            subject:options.subject,
            html:data
        }
        // 3) Actually send the mail
        await transporter.sendMail(mailOptions)
    }
    })
    }
    
    await sendEmail({
        email:this.email,
        subject: 'Password Reset',
    

    })


}

export default mongoose.model('User', UserSchema)