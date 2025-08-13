import Usuario from '../models/usuario.js';

export const cadastro = async (req, res) => {
    const {userName, senha} = (req.body)
    if(!userName || !senha || userName.length === 0 || senha.length === 0) {
        return res.status(404).json({message: "Todos os campos devem ser preenchidos !"})
    };
    try {
        const novoUsuario = new Usuario({userName, senha})
        await novoUsuario.save()

        res.status(200).json({message: 'Usuário cadastrado com sucesso !'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Erro interno do servidor'})
    }
}
