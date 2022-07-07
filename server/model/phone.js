const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 50,
      },
      number: {
        type: String,
        required: [true, 'Please provide number'],
        maxlength: 50,
      },
      createdBy: {
        type: String,
        required: [true, 'Please provide user'], 
      }
});



module.exports = mongoose.model('Phone', phoneSchema)