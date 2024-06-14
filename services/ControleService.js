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

    
    Create(data) {
        const relatorio = new Relatorios(data)
        return relatorio.save()
    }
    async Update(id ,Consumidos){
        const prato = await Pratos.findById(id)
        let ConsumidosAtual = prato.Consumidos
        let ConsumidosNovo = ConsumidosAtual + parseInt(Consumidos)
        let FeitosAtual = prato.Feitos
        let FeitosoNovo = FeitosAtual -parseInt(Consumidos)


        return Pratos.findByIdAndUpdate(id, {Consumidos: ConsumidosNovo, Feitos : FeitosoNovo})


    }
    async UpdatePrato(id){
        const prato = await Pratos.findById(id)
        let ConsumidosAtual = prato.Consumidos
        let ConsumidosNovo = ConsumidosAtual - ConsumidosAtual
        let FeitosAtual = prato.Feitos
        let FeitosNovo = FeitosAtual - FeitosAtual

        return Pratos.findByIdAndUpdate(id, {Consumidos: ConsumidosNovo, Feitos : FeitosNovo})

    }
    Delete(id) {
        Pratos.findByIdAndDelete(id).then(() => {
            console.log(`prato com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }

}

export default new ControleService()
