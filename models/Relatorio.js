import mongoose from 'mongoose'

const relatorio = new mongoose.Schema({
   Pratos: Number,
   PratosConsumidos: Number,
   PratosFeitos: Number,
   PratosDesperdicados : Number,
   dataCriacao: {
      type: Date,
      default: Date.now
  },
   Pratododia: String,
   diaSemana: String
})

export default relatorio




