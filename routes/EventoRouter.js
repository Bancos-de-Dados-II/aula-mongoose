const express = require('express');
const eventoRouter = express.Router();
const eventoController = require('../controller/EventoController.js');

eventoRouter.get('/', eventoController.listarEventos);
eventoRouter.get('/:id', eventoController.buscarPorId);
eventoRouter.post('/', eventoController.salvarEvento);
eventoRouter.delete('/:id', eventoController.deletarEvento);
eventoRouter.put('/:id', eventoController.atualizarEvento);

module.exports = eventoRouter;