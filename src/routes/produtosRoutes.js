import express from 'express'
import * as produtosController from '../app/controllers/produtosControllers.js'

const router = express.Router()

router.get('/', produtosController.listaGeral);
router.get('/:id', produtosController.listarProdutosPorId);
router.post('/', produtosController.adicionarProdutos);
router.put('/:id', produtosController.editarProduto);
router.delete('/:id', produtosController.deletarProduto);

export default router;
