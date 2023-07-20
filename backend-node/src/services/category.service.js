const CategoryModel = require('../models/category.model');

class CategoryService {
  async findAll() {
    const categories = await CategoryModel.find();
    return categories;
  }

  async findOne(id) {
    const category = await CategoryModel.findById(id);
    if (!category) throw new Error(`Category not found`);
    return category;
  }

  async findByName(name) {
    const category = await CategoryModel.findOne({ name });
    if (category) throw new Error(`Category exist`);
    return null;
  }

  async create(data) {
    const newCategory = await CategoryModel.create(data);
    return newCategory;
  }

  async update(id, data) {
    const category = await CategoryModel.findById(id);
    const categoryUpdated = await category.updateOne(data);
    return categoryUpdated;
  }

  async delete(id) {
    const category = await CategoryModel.findById(id);
    if (!category) throw new Error(`Category not found`);
    await category.deleteOne();
    return { id };
  }
}

module.exports = CategoryService;
