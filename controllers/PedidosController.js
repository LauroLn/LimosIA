import express from "express"
const router = express.Router()
import Auth from "../middleware/Auth.js"

// ROTA PEDIDOS
router.get("/pedidos", Auth, function(req,res){
    const pedidos = [

    ]
    res.render("pedidos", {
        pedidos: pedidos
    })

})

export default router

