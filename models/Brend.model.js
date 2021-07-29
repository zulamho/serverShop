const mongoose = require("mongoose");

const brendSchema = mongoose.Schema({
  name: String,
});

const Brend = mongoose.model("Brend", brendSchema);

module.exports = Brend;
