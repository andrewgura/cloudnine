const express = require('express');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const payment = require('./api/payment/stripe');

app.use('/api', [payment]);

app.listen(5000, function() {
  console.log('Example app listening on port 5000!')
})
