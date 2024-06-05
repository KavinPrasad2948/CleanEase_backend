const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Clean_Ease:TN63BC3436@cleanease.nnua5vg.mongodb.net/';

mongoose.connect(dbURI, {
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Database connection successful');
}).catch((err) => {
  console.error('Database connection error:', err);
});
