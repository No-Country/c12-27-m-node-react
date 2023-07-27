const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
  image: {
    type: String,
  },
});

module.exports = model('Category', CategorySchema);
