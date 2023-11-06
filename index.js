const Evento = require('./model/Evento');

const evento = new Evento({
    titulo: 'Exponegócios',
    descricao: 'Cajazeiras Exponegócios',
    data: new Date("2023-11-16"),
    inscritos: 1000,
    tipo: 'Tecnológico',
    localizacao: {
        type: 'Point',
        coordinates: [-38.5672, -6.9002]
    }
});

evento.save().then((retorno) => console.log(retorno)).catch(err => console.log(err));