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
           peso : peso,
           quantidade : quantidade,
           validade : validade
        })
        novoProduto.save()
    }
    SelectOne(id){
        const produto = Estoque.findOne({_id: id})
        return produto
        
    }
    Update(id, produto, quantidade, peso, validade) {
        Estoque.findByIdAndUpdate(id, {
            produto: produto,
            quantidade: quantidade,
            peso: peso,
            validade: validade
        }).then(() => {
            console.log(`Dados do produto com id: ${id} alterados com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }
    Delete(id) {
        Estoque.findByIdAndDelete(id).then(() => {
            console.log(`Produto com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }
}

   
   


export default new EstoqueService()