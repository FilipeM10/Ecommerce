import express from 'express'
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Sua API está rodando na porta: 127.0.0.1:${PORT}`)
})