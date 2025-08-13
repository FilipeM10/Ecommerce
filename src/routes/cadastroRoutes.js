import * as cadastroController from '../app/controllers/cadastroController.js'
import express from 'express'

const cadastroRouter = express.Router();

cadastroRouter.post('/', cadastroController.cadastro)

export default cadastroRouter;
