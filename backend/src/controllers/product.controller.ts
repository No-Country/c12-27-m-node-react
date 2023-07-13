import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

const service = new ProductService();

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await service.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};

const getOneProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newProduct = await service.create(data);
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  //TODO: Implement logic to update one product
  res.json('Update Product');
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
