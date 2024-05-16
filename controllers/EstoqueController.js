import express from "express"
const router = express.Router()
import EstoqueService from "../services/EstoqueService.js"
import Auth from "../middleware/Auth.js"

router.get("/estoque",  Auth, (req, res) => {
    EstoqueService.SelectAll().then((estoque) => {
      res.render("estoque", {
        estoque: estoque,
      })
    })
  })

router.post("/estoque/novo", Auth, (req,res) =>{
  EstoqueService.Create(
    req.body.produto,
    req.body.quantidade,
    req.body.peso,
    req.body.validade
  )
  res.redirect("/estoque");
} )
router.get("/estoqueCad",  Auth, (req, res) => {
  EstoqueService.SelectAll().then((estoque) => {
    res.render("estoqueCad", {
      estoque: estoque,
    })
  })
})
router.get("/estoqueEdit",  Auth, (req, res) => {
  EstoqueService.SelectAll().then((estoque) => {
    res.render("estoqueEdit", {
      estoque: estoque,
    })
  })
})



 export default router