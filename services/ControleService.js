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
    CreateInicio(Feitos,Consumidos){
        const prato = new Pratos({
            Feitos:Feitos,
            Consumidos: Consumidos
        })
        prato.save()
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
      

        let ConsumidosNovo = 0
        
        let FeitosNovo = 100

        return await Pratos.findByIdAndUpdate(id, {Consumidos: ConsumidosNovo, Feitos : FeitosNovo})

    }
    Delete(id) {
        Pratos.findByIdAndDelete(id).then(() => {
            console.log(`prato com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }
   /* async UpdateAdd(id) {
        const updatedPrato = await Pratos.findByIdAndUpdate(
            id, // ID do prato que você deseja atualizar
            { $set: { Consumidos: 0, Feitos: 100 } }, 
            { new: true } 
        );
        return updatedPrato
      }
*/

    SelectRelatorios() {
        const relatorio = Relatorios.find()
        return relatorio
    }
}
/*let consumidos = 100
let feitos = 0
return Pratos.findByIdAndUpdate(id,{Consumidos: consumidos, Feitos: feitos})
*/

export default new ControleService()
