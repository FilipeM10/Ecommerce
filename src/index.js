import express from 'express'
import authRouter from './routes/authRoutes.js'
import proRoute from './routes/produtosRoutes.js'
import deletRouter from './routes/excluidosRoutes.js'
import cadastroRouter from './routes/cadastroRoutes.js';
import 'dotenv/config';

const app = express()

app.use(express.json());
app.use('/auth', authRouter)
app.use('/produtos', proRoute);
app.use('/produtos', deletRouter);
app.use('/cadastro', cadastroRouter);

export default app;
