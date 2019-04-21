const express = require('express');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise')
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

const payment = require('./api/payment/stripe');

app.use('/api', [payment]);


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(5000, function() {
  console.log('Example app listening on port 5000!')
})
