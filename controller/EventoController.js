const Evento = require('../model/Evento');

module.exports.listarEventos = async function (req, res) {
    const eventos = await Evento.find({},
        {titulo:true, descricao:true});
    res.status(200).json(eventos);
};

module.exports.buscarPorId = async function (req, res) {
    const evento = await Evento.findById(req.params.id);
    
    if(!evento){
        res.status(404).json({erro: 'Evento não encontrado'});
        return;
    }
    
    res.status(200).json(evento);
};

module.exports.salvarEvento = async function (req, res) {
    res.json('OK');
};

module.exports.deletarEvento = async function (req, res) {
    res.json('OK');
};

module.exports.atualizarEvento = async function (req, res) {
    res.json('OK');
};