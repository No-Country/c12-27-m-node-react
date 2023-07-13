import { Schema, Types, model, Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';

const ProductSchema = new Schema<Product>({
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

const ProductModel = model('products', ProductSchema);

export default ProductModel;
