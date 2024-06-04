const express = require('express');
const auth = require('../middleware/auth');
const Booking = require('../models/Booking');
const router = express.Router();

//! Get all bookings for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    //* Fetch all bookings for the authenticated user
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//! Create a new booking
router.post('/', auth, async (req, res) => {
  const { service, date, userEmail,notes } = req.body; 

  try {
    
    const existingBookings = await Booking.find({ date });
    if (existingBookings.length >= 3) {
      return res.status(400).json({ msg: 'Maximum bookings reached for this date' });
    }

    
    const newBooking = new Booking({
      user: req.user.id,
      service,
      date,
      userEmail,
      notes,
      
    });

    const booking = await newBooking.save();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//! Update a booking
router.put('/:id', auth, async (req, res) => {
  const { service, date, notes } = req.body;
  try {
    let booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ msg: 'Booking not found' });
    }

    
    if (booking.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    
    booking.service = service || booking.service;
    booking.date = date || booking.date;
    booking.notes = notes || booking.notes;

   
    await booking.save();
    res.json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//! Delete a booking
router.delete('/:id', auth, async (req, res) => {
  try {
    let booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ msg: 'Booking not found' });
    }

    if (booking.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Booking.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Booking removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
