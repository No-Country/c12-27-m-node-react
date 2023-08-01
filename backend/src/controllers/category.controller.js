const CategoryService = require('../services/category.service');

const service = new CategoryService();

const getCategories = async (req, res) => {
  try {
    const categories = await service.findAll();
    res.json(categories);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const name = data.name.toUpperCase();
    const { image } = data;

    const category = await service.findByName(name);
    if (category)
      return res.status(400).json({ message: `Category ${name} exists` });

    const newCategory = await service.create({ name, image });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: `The category exists` });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const name = data.name.toUpperCase();

  try {
    const categoryUpdate = await service.update(id, { name, ...data });
    res.json(categoryUpdate);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: `Category with id ${id} removed` });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
