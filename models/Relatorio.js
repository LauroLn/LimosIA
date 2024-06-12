import mongoose from 'mongoose'

const relatorio = new mongoose.Schema({
   Pratos: Number,
   PratosConsumidos: Number,
   PratosFeitos: Number,
   PratosDesperdicados : Number 
})

export default relatorio




