import mongoose from "mongoose";
import pratos from "../models/Pratos.js"

const Pratos = mongoose.model("Prato", pratos)

class ControleService{
    SelectAll() {
        const pratos = Pratos.find()
        return pratos
    }

    Create(Consumidos) {
        const PratoConsumido = new Pratos({
           consumidos : consumidos
        })
        PratoConsumido.save()
    }
}

export default new ControleService()
