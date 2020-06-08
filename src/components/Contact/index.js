// started work to have fully functional and email the message.
// this file might have been a part of that depending upon the method used

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});

app.get('/', (req, res) => {
  res.send('Welcome to my api');
});

app.post('/api/v1', (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: 'USERNAME',
      pass: 'PASSWORD',
    },
  });

  var mailOptions = {
    from: data.email,
    to: 'betsy.petering@sbcglobal.net',
    subject: 'From Portfolio Viewer',
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('Success');
    }
    smtpTransport.close();
  });
});
