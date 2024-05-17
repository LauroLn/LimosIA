import express from "express"
const router = express.Router()
import EstoqueService from "../services/EstoqueService.js"
import Auth from "../middleware/Auth.js"
import ClienteService from "../services/ClienteService.js"

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
router.get("/estoque/cadastrar",  Auth, (req, res) => {
  EstoqueService.SelectAll().then((estoque) => {
    res.render("estoqueCad", {
      estoque: estoque,
    })
  })
})
router.get("/estoque/editar",  Auth, (req, res) => {
  EstoqueService.SelectAll().then((estoque) => {
    res.render("estoqueEdit", {
      estoque: estoque,
    })
  })
})
router.get("/estoque/editar/:id",  Auth, (req, res) => {
  const id = req.params.id;
  EstoqueService.SelectOne(id).then((estoque) => {
    res.render("estoqueEdit", {
      estoque: estoque,
    })
  })
})
router.post("/estoque/update/:id",  Auth, (req, res) => {
  EstoqueService.Update(
    req.params.id,
    req.body.produto,
    req.body.quantidade,
    req.body.peso,
    req.body.validade
  )
  res.redirect("/estoque")
})
router.get("/estoque/excluir/:id", Auth , (req,res) =>{
  const id = req.params.id
  EstoqueService.Delete(id)
  res.redirect("/estoque")
})



 export default router