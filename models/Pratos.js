import mongoose from 'mongoose'

const pratos = new mongoose.Schema({
   Feitos: Number,
   Consumidos: Number 
})

export default pratos