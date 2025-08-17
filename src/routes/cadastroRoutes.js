import * as cadastroController from '../app/controllers/cadastroController.js'
import verificarToken from '../app/middlewares/auth.js'
import express from 'express'

const router = express.Router();

router.post('/', cadastroController.cadastro)

router.post('/rotaAutenticada', verificarToken, (req, res) => {
    res.json({ message: 'Acesso permitido', usuario: req.usuario })
});

export default router;
