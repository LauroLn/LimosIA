import produtos from "../models/Estoque.js"
import mongoose from "mongoose"

const Estoque = mongoose.model("Estoque", produtos)

class EstoqueService {

    SelectAll() {
        const produtos = Estoque.find()
        return produtos
    }


    Create(produto, peso, quantidade, validade) {
        const novoProduto = new Estoque({
            produto : produto,
            quantidade : quantidade,
            peso : peso,
            validade : validade
        })
        novoProduto.save()
    }

   
   
}

export default new EstoqueService()