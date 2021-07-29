const { Router } = require("./routes.model");
const { categoryController } = require("../controllers/category.controllers");

const router = Router();

router("/category", categoryController.addCategory);
router("/category/:id", categoryController.deleteCategory);
router("/category/:id", categoryController.changeCategory);

module.exports = router;
