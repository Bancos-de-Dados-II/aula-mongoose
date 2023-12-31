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
    const retorno = await Evento.create(req.body);
    res.status(201).json(retorno);
};

module.exports.deletarEvento = async function (req, res) {
    const evento = await Evento.findById(req.params.id);
    
    if(!evento){
        res.status(404).json({erro: 'Evento não encontrado'});
        return;
    }
    
    await Evento.findByIdAndDelete(req.params.id);
    res.status(200).json({mensagem: 'Evento removido com sucesso'});
};

module.exports.atualizarEvento = async function (req, res) {
    const evento = await Evento.findById(req.params.id);
    
    if(!evento){
        res.status(404).json({erro: 'Evento não encontrado'});
        return;
    }
    
    const retorno = await Evento.findByIdAndUpdate(
        req.params.id, req.body, {new: true});
    res.status(200).json(retorno);
};