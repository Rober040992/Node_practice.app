import mongoose,{ Schema } from 'mongoose'

//definir el esquema de los agents
const agentSchema = Schema({
    name: {type: String, unique: true},
    age: Number
})

//creamos el modelo de agente
const Agent = mongoose.model('Agent', agentSchema)

export default Agent