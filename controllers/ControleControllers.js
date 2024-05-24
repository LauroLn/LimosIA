import express from "express"
const router = express.Router()
import Auth from "../middleware/Auth.js"
import ControleService from "../services/ControleService.js"

router.get("/controle",  Auth, (req, res) => {
    ControleService.SelectAll().then((prato) => {
      res.render("pratos", {
        pratosFeitos: prato[0].Feitos,
        pratosConsumidos: prato[0].Consumidos,
        pratoID : prato[0]._id
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
  router.post("/controle/adicionar", Auth, (req,res) =>{
    const id = req.body.id
    const consumidos = req.body.Consumidos
    ControleService.Update(id, consumidos)
      res.redirect("/controle")
  })



export default router

