import * as controllerDadosExcluidos from '../app/controllers/deletados.js';
import express from 'express';

const deletRouter = express.Router();

deletRouter.get('/deletados/filtrado', controllerDadosExcluidos.excluidos);
deletRouter.get('/deletados/geral', controllerDadosExcluidos.dadosGerais);

export default deletRouter;
