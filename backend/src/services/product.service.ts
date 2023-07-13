import { Product } from '../interfaces/product.interface';
import ProductModel from '../models/product.model';

class ProductService {
  async findAll() {
    const products = await ProductModel.find();
    return products;
  }

  async findOne(id: any) {
    const product = await ProductModel.findById(id);
    if (!product) throw new Error(`Product not found`);
    return product;
  }

  async create(product: Product) {
    const newProduct = await ProductModel.create(product);
    return newProduct;
  }

  async update(id: any, data: any) {
    const product = await ProductModel.findById(id);
    const productUpdated = await product?.updateOne(data);
    return productUpdated;
  }

  async delete(id: any) {
    const product = await ProductModel.findById(id);
    if (!product) throw new Error(`Product not found`);
    await product.deleteOne();
    return { id };
  }
}

export { ProductService };
