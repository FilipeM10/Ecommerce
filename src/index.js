import express from 'express'
import 'dotenv/config';
import proRoute from './routes/produtosRoutes.js'
import deletRouter from './routes/excluidosRoutes.js'

const app = express()

app.use(express.json());
app.use('/produtos', proRoute);
app.use('/produtos', deletRouter);

export default app;