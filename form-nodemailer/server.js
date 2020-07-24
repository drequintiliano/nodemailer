const express = require("express"),
      path = require('path'),
      nodeMailer = require('nodemailer'),
      bodyParser = require('body-parser');

let app = express();

app.use(express.static('src'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});




app.post('/send-email', (req, res) => {
    console.log('Data: ', req.body);
    res.json({ message: 'Email enviado!!!'})

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {          
            user: 'drequintiliano@gmail.com',
            pass: 'kellyesposa161094'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        },  
    });

    const mailOptions = {
        from: "drequintiliano@gmail.com",
        to: 'kellymaiara72@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
});





let server = app.listen(8081, function(){
    let port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});