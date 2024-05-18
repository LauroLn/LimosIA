import express from "express"
const router = express.Router()
import Auth from "../middleware/Auth.js"


router.get("/controle", Auth, function(req,res){
    res.render("pratos")

})


export default router

