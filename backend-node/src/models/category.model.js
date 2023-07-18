const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String,
  },
});

module.exports = model('categories', CategorySchema);
