const User = require("../models/User.model")

module.exports.userConroller = {
    addUser : async (req , res ) =>{
        try{
            await User.create({
                name: req.body.name
            }) 
            res.json("Пользователь добавлен!")
        }catch (err) {
            consol.log(err)
        }
    }
}