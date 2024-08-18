const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/users', (req, res) => {
  res.send([
    {
      id: 1,
      user_name: "bob.someone"
    },
    {
      id: 2,
      user_name: "alice.anyone"
    },
  ])
});

module.exports = app;
