const Brend = require("../models/Brend.model");

module.exports.brendController = {
  addBrend: (req, res) => {
    try {
      await Brend.create({
        name: req.body.name,
      });
      res.send("Бренд добавлен!");
    } catch (err) {
      console.log(err);
    }
  },
  changeBrend: (req, res) => {
    try {
      await Brend.findById(req.params.id);
      res.send("Бренд  изменен!");
    } catch (err) {
      console.log(err);
    }
  },

  deleteBrend: (req, res) => {
    try {
      await Brend.findByIdAndDelete(req.params.id);
      res.send("Бренд удален!");
    } catch (err) {
      console.log(err);
    }
  },
};
