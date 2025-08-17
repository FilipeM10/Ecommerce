import Usuario from '../models/usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const SECRET = process.env.SECRET
if(!SECRET) {
    console.error("FATAL: JWT SECRET não definido em process.env.SECRET")
    process.exit(1)
}

export const login = async (req, res) => {
    try {
        const { email, senha } = req.body

        if (!email || !senha) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Email e senha são obrigatórios.'
            })
        }

        const usuario = await Usuario.findOne({ where: { email } })

        if (!usuario) {
            return res.status(401).json({
                statusCode: 401,
                message: 'Credenciais inválidas.'
            })
        }

        const validacao = await bcrypt.compare(senha, usuario.senha)
        if(!validacao) {
            return res.status(401).json({
                statusCode:401,
                message: "Não autorizado"
            })
        }

        const payload = {
            sub: usuario.id,
            email: usuario.email
        }

        const token = jwt.sign(payload, SECRET, { expiresIn: '8h' })

        return res.status(200).json({
            statusCode: 200,
            message: "Login realizado com sucesso",
            data: {
                token
            }
        })
    } catch(error) {
        console.error(error)
        return res.status(500).json({
            statusCode: 500,
            message: 'Erro interno do servidor'
        })
    }
}
