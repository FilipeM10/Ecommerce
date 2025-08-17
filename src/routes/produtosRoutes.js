import * as produtosController from '../app/controllers/produtosControllers.js'
import express from 'express'

const router = express.Router()

router.get('/', produtosController.listaGeral);
router.get('/:id', produtosController.listarProdutosPorId);
router.post('/', produtosController.adicionarProdutos);
router.put('/:id', produtosController.editarProduto);
router.delete('/:id', produtosController.deletarProduto);

export default router;
