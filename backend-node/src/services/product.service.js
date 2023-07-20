const ProductModel = require('../models/product.model');

class ProductService {
  async findAll() {
    const products = await ProductModel.find();
    return products;
  }

  async findOne(id) {
    const product = await ProductModel.findById(id);
    if (!product) throw new Error(`Product not found`);
    return product;
  }

  async create(product) {
    const newProduct = await ProductModel.create(product);
    return newProduct;
  }

  async update(id, data) {
    const product = await ProductModel.findById(id);
    // const productUpdated = await product.updateOne(data);
    const productUpdated = await ProductModel.findByIdAndUpdate(id, data, {
      new: true,
    }).select('-__v');
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
