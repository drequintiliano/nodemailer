// const express = require('express')
// const nodemailer = require("nodemailer");
// const app = express()

// const port = 3000

const user = "drequintiliano@gmail.com"
const pass = ""

// app.get('/', (req, res) => res.send('Helo World!'))

// app.get('/send', (req, res) => {

//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true, // use SSL
//         auth: { user, pass },
//         tls: {
//             // do not fail on invalid certs
//             rejectUnauthorized: false
//         },
//     })

//     transporter.sendMail({
//         from: user,
//         to: "kellymaiara72@gmail.com",
//         replayTo: user,
//         subject: "teste NodeJS",
//         text: "Ola muito obrigado por se cadastrar na minha vida C:",
//     }).then(message => {
//         res.send(message)
//     }).catch(err => {
//         res.send(err)
//     })
// })

// app.listen(port, () => console.log(`Running on port ${port}!`))

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: { user, pass },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
})

transporter.sendMail({
    from: user,
    to: "andrevsc25@gmail.com",
    replayTo: user,
    subject: "Teste NodeJS",
    text: "Oi, eu sou um teste e voce me ama!",
    html: "Olá esse é um teste de email NodeJS entra no meu link bonito <a href='https://facebook.com/drequintiliano'> pra ver um cara bonito.",
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})

