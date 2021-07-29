const Brend = require("../models/Brend.model");

module.exports.brendController = {
  addBrend: async (req, res) => {
    try {
      await Brend.create({
        name: req.body.name,
      });
      res.send("Бренд добавлен!");
    } catch (err) {
      console.log(err);
    }
  },
  changeBrend: async (req, res) => {
    try {
      await Brend.findById(req.params.id);
      res.send("Бренд  изменен!");
    } catch (err) {
      console.log(err);
    }
  },

  deleteBrend: async (req, res) => {
    try {
      await Brend.findByIdAndDelete(req.params.id);
      res.send("Бренд удален!");
    } catch (err) {
      console.log(err);
    }
  },
};
