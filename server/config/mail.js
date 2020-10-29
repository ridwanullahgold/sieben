const nodemailer = require('nodemailer');
const hbs = require("nodemailer-express-handlebars")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});