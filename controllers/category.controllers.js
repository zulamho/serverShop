const Category = require("../models/category.model");

module.exports.categoryController = {
  addCategory: (req, res) => {
    try {
      await Category.create({ name: req.body.name });
      res.send("Категория добавлена!");
    } catch (err) {
      console.log(err);
    }
  },

  deleteCategory: (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.send("Категория удалена!");
    } catch (err) {
      console.log(err);
    }
  },

  changeCategory: (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id);
      res.send("Категория была изменена!");
    } catch (err) {
      console.log(err);
    }
  },
};
