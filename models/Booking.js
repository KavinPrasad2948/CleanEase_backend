
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  address: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  totalSquareFootage: { type: Number, required: false },
  typeOfResidence: { type: String, required: false },
  typeOfFlooring: { type: String, required: false },
  numberOfBedrooms: { type: Number, required: false },
  numberOfBathrooms: { type: Number, required: false },
  servicesRequested: { type: [String], required: false },
  paymentMethod: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
