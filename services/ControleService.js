import mongoose from "mongoose";
import relatorio from "../models/Relatorio.js";
import pratos from "../models/Pratos.js"

const Pratos = mongoose.model("Prato", pratos)
const Relatorios = mongoose.model("Relatorio", relatorio)

class ControleService{
    SelectAll() {
        const pratos = Pratos.find()
        return pratos
    }

    
    Create( Feitos, Consumidos ) {
        const relatorio = new Relatorios({
            PratosConsumidos : Feitos,
            PratosFeitos : Consumidos,
            
        })
        relatorio.save()
    }
}

export default new ControleService()
