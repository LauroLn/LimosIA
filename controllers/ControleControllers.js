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
   
    const data = req.body
    ControleService.Create(data).then(pratos =>{
      console.log(pratos);
      res.redirect("/controle");
    }).catch(error =>{
      console.log(error)
    })
      
    
 
  } )
  router.post("/controle/adicionar", Auth, (req,res) =>{
    const id = req.body.id
    const consumidos = req.body.Consumidos
    ControleService.Update(id, consumidos)
      res.redirect("/controle")
  })
/*
  router.post("/controle/excluir", Auth, (req,res) =>{
    const id = req.body.id; 
    ControleService.Delete(id)
    .then(() => {
      res.redirect("/controle");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Erro ao excluir prato");
    });
  })
  */
  router.post("/controle/updatePratos", Auth, async (req,res)=>{
    const id = req.body.id;
    const teste = await ControleService.UpdatePrato(id)
    console.log(teste)
    res.redirect("/controle")
  })
  router.post("/controle/updateAdd", Auth, async (req,res)=>{
    const id = req.body.id;
    const aaa = await ControleService.UpdateAdd(id)
    console.log(aaa)
   
  
    res.redirect("/controle")
  })



export default router

