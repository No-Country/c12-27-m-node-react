const CategoryService = require('../services/category.service');

const service = new CategoryService();

const getCategories = async (req, res) => {
  try {
    const categories = await service.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
  }
};

const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  } catch (error) {
    console.log(error);
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
  const { data } = req.body;

  const category = await service.findOne(id);
  if (!category) return res.status(404).json({ message: 'Category not found' });

  const categoryUpdate = await service.update(id, data);
  res.json(categoryUpdate);
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json(id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
