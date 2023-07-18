const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  serialCode: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = model('products', ProductSchema);
