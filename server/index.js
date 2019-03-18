const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const mailer = require('./mailer/mailer.js');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.post('/api/contact', (req, res) => {
    const { firstName, lastName, phoneNumber, emailAddress, messageText } = req.body
    
    mailer.send( firstName, lastName, phoneNumber, emailAddress, messageText ).then(() => {
      console.log(`Sent the message "${messageText}" from <${firstName}> ${emailAddress}.`);
      res.status(200);
      res.send('success')
    }).catch((error) => {
      console.log(`Failed to send the message "${messageText}" from <${firstName}> ${emailAddress} with the error ${error && error.message}`);
      res.status(400);
      res.send('failure')
    })
  });

  server.listen( (process.env.PORT || 3000) , (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  });
  
});

