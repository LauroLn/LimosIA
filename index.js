import express from "express" 
const app = express()
import mongoose from "mongoose" 
import CardapioController from "./controllers/CardapioController.js"
import EstoqueController from "./controllers/EstoqueController.js"
import UsersController from "./controllers/UsersController.js"
import ControleController from "./controllers/ControleControllers.js"
import session from "express-session"
import Auth from "./middleware/Auth.js"
import ControleService from "./services/ControleService.js"

app.use(session({
    secret: "limosiasecret",
    cookie: {maxAge: 3600000}, 
    saveUninitialized: false,
    resave: false
  }))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/limosia")

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use("/", EstoqueController)
app.use("/", CardapioController)
app.use("/", UsersController)
app.use("/", ControleController)

app.get("/",  Auth, (req, res) => {
    ControleService.SelectRelatorios().then((relatorio) => {
      res.render("index", {
        pratosFeitos: relatorio[0].PratosFeitos,
        pratosConsumidos: relatorio[0].Consumidos,
        Pratos: relatorio[0].pratos,
        PratosDesperdicados: relatorio[0].PratosDesperdicados,
        diaSemana: relatorio[0].diaSemana,
        Pratododia: relatorio[0].Pratododia
      })
    })
  })

app.get("/", Auth, function(req,res){
    res.render("index")
})

app.listen(8000,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})