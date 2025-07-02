import index from './index'
const PORT = 3000

index.listen(PORT, () => {
    console.log(`Sua API está rodando na porta: 127.0.0.1:${PORT}`)
})