const { Router } = require("express");
const { brendController } = require("../controllers/brend.controller");

const router = Router();

router.post("/brend", brendController.addBrend);
router.patch("/brend/:id", brendController.changeBrend);
router.delete("/brend/:id", brendController.deleteBrend);

module.exports = router;
