import express from "express"
const router = express.Router()
import Auth from "../middleware/Auth.js"

router.all("/cardapio", Auth, (req,res) =>{
    res.render("cardapio")
})

export default router