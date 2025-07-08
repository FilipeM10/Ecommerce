import index from './index.js'
import sequelize from './app/config/database.js'

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter:true })
.then(() => {
    console.log('✅ Conexão com MySQL bem sucedida!')
    index.listen(PORT, () => {
        console.log(`Sua API está rodando na porta: 127.0.0.1:${PORT}`)
    })
}).catch((error) => {
    console.error('❌ Erro ao conectar com o banco de dados:', error)
})