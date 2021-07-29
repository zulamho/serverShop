const { Router } = require("express")
const { userController} = require("../controllers/user.controller")

const router = Router()

router.post("/route" , userController.addUser)

module.exports = router
