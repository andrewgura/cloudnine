const express = require('express');
const router = express.Router();
const stripe = require("stripe")("sk_test_So4njuiOtLZiWYfbBAdpHu09");

const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).json({ success: stripeRes });
  }
};

router.post('/payment', async function(req, res){
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  stripe.charges.create(body, stripeChargeCallback(res));
})

module.exports = router;
