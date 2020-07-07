const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useFindAndModify', false);

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
personSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
