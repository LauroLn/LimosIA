import express from "express"
const router = express.Router()
import Auth from "../middleware/Auth.js"
import ControleService from "../services/ControleService.js"

router.get("/controle",  Auth, (req, res) => {
    ControleService.SelectAll().then((prato) => {
      res.render("pratos", {
        pratosFeitos: prato[0].Feitos,
        pratosConsumidos: prato[0].Consumidos,

      })
    })
  })
  router.post("/controle/novo", Auth, (req,res) =>{
    ControleService.Create(
      req.body.Feitos,
      req.body.Consumidos,
      
    )
    res.redirect("/controle");
  } )


export default router

