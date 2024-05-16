import mongoose from 'mongoose'

const produtos = new mongoose.Schema({
    produto : String,
    quantidade : Number,
    peso : Number,
    validade : Date
})

export default produtos