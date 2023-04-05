const nodemailer = require('nodemailer')

class MailService {
    constructor() {

        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        })
    }
    async sendActivationMail(to, link, body) {
        console.log(body)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Новая заявка с сайта автошколаправа.рф",
            text: '',
            html: `<div>
                <b>Имя клиента: </b><p>${body.name}</p><br>
                <b>Фамилия клиента: </b><p>${body.lastname}</p><br>
                <b>Почта клиента: </b><p>${body.email}</p><br>
                <b>Дата записи: </b><p>${body.dataCurrent}</p><br>
                <b>Телефон клиента: </b><p>${body.phoneClient}</p><br>
                <b>Форма обучения клиента: </b><p>${body.formsLearnClient}</p><br>
            </div>`
        })
    }
}

module.exports = new MailService()