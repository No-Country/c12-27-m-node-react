const ProductService = require('../services/product.service');
const service = new ProductService();

const getAllProducts = async (req, res) => {
  try {
    const products = await service.findAll();
    res.json(products);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await service.create(data);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { ...data } = req.body;

  try {
    const productUpdate = await service.update(id, data);
    res.json(productUpdate);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res
      .status(200)
      .json({ message: `Product with id ${id} successfully removed` });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
