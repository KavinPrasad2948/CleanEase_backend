
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  totalSquareFootage: { type: Number, required: true },
  typeOfResidence: { type: String, required: true },
  typeOfFlooring: { type: String, required: true },
  numberOfBedrooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  servicesRequested: { type: [String], required: true },
  paymentMethod: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
