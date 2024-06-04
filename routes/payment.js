const express = require('express');
const router = express.Router();
const stripe = require('stripe')('your-secret-key-here'); // Your Stripe secret key
const auth = require('../middleware/auth');
const Booking = require('../models/Booking');

router.post('/create-payment-intent', auth, async (req, res) => {
  const { bookingId } = req.body;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ msg: 'Booking not found' });
    }

    const amount = booking.service === 'Commercial Cleaning' ? 60000 : booking.service === 'Professional Cleaning' ? 30000 : 20000; // Amount in cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/payment-success', auth, async (req, res) => {
  const { bookingId } = req.body;

  try {
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ msg: 'Booking not found' });
    }

    booking.status = 'Completed';
    await booking.save();

    res.json({ msg: 'Payment recorded successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
