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
    async Update(id ,Consumidos){
        const prato = await Pratos.findById(id)
        let ConsumidosAtual = prato.Consumidos
        let ConsumidosNovo = ConsumidosAtual + parseInt(Consumidos)
        let FeitosAtual = prato.Feitos
        let FeitosoNovo = FeitosAtual -parseInt(Consumidos)


        return Pratos.findByIdAndUpdate(id, {Consumidos: ConsumidosNovo, Feitos : FeitosoNovo})


    }

}

export default new ControleService()
