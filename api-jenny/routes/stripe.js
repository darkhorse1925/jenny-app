/*Incomplete*/
import 'dotenv/config'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_KEY)

import express from 'express'
const router = express.Router()

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router
