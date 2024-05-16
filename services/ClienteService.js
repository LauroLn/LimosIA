import cliente from "../models/Cliente.js"
import mongoose from "mongoose"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService {
    // Método para SELECIONAR TODOS os Clientes no banco
    SelectAll() {
        const clientes = Cliente.find()
        return clientes
    }

    // Método para CADASTRAR um Cliente
    Create(nome, cpf, endereco) {
        const novoCliente = new Cliente({
            nome: nome,
            cpf: cpf,
            endereco: endereco
        })
        novoCliente.save()
    }

    // Método para EXCLUIR um Cliente
    Delete(id) {
        Cliente.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }

    // Método para SELECIONAR UM Cliente
    SelectOne(id) {
        const cliente = Cliente.findOne({_id: id})
        return cliente
    }

    // Método para ALTERAR um Cliente
    Update(id, nome, cpf, endereco) {
        Cliente.findByIdAndUpdate(id, {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        }).then(() => {
            console.log(`Dados do cliente com id: ${id} alterados com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new ClienteService()