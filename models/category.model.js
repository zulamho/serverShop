const mongoose = require("mongoose");

const categorySchem = mongoose.Schema({
  name: String,
});
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
