var express = require('express');
var router = express.Router();

router.post('/payment', async function(req, res){
  console.log(req.body)
})

module.exports = router;
