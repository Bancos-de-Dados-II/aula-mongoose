require('dotenv').config();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Conectado com o Mongo');
}

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

const sertaoComp = new Evento({
    titulo: 'Sertão Comp',
    descricao: 'Encontro de computação do sertão',
    data: new Date(),
    inscritos: 100,
    tipo: 'Tecnológico',
    localizacao: {
        type: 'Point',
        coordinates: [-38.5443, -6.8897]
    }
});

sertaoComp.save().then(() => console.log('Salvo com sucesso!')).catch(err => console.log(err));