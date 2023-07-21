const ProductModel = require('../models/product.model');

class ProductService {
  async findAll() {
    const query = { status: true };
    const products = await ProductModel.find(query).select('-__v -status');
    return products;
  }

  async findOne(id) {
    const product = await ProductModel.findById(id).select('-__v');
    if (!product) throw new Error(`Product not found`);
    return product;
  }

  async create(product) {
    const newProduct = await ProductModel.create(product);
    return newProduct;
  }

  async update(id, data) {
    const productUpdated = await ProductModel.findByIdAndUpdate(id, data, {
      new: true,
    }).select('-__v');
    if (!productUpdated) throw new Error(`Product not found`);
    return productUpdated;
  }

  async delete(id) {
    const product = await ProductModel.findById(id);
    if (!product) throw new Error(`Product not found`);
    await product.deleteOne();
    return { id };
  }
}

module.exports = ProductService;
