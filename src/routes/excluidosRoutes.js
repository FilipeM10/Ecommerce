import * as controllerDadosExcluidos from '../app/controllers/deletados.js';
import express from 'express';

const router = express.Router();

router.get('/deletados/filtrado', controllerDadosExcluidos.excluidos);
router.get('/deletados/geral', controllerDadosExcluidos.dadosGerais);

export default router;
