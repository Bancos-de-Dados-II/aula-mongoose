const mongoose = require('../database/mongoose');
const {Schema} = mongoose;

const eventoSchema = new Schema({
    titulo: String,
    descricao: String,
    data: Date,
    inscritos: Number,
    tipo: {
        type: String,
        enum: ['Científico', 'Tecnológico', 'Cultural', 'Esportivo'],
        default:  'Científico' 
    },
    localizacao: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
});

const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;