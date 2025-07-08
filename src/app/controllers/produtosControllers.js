import Dados from '../models/produtos.js';

export const listaGeral = async(req, res) => {
    try {
        const lista = await Dados.findAll();
        if(!lista || lista.length === 0) {
            return res.status(404).json({mensage: 'Produto não cadastrado !'});
        }
        res.status(200).json(lista);
    } catch (error) {
        console.error(error);
        res.status(500).json({mensage: 'Erro interno do servidor'})
    }
}
export const listarProdutosPorId = async(req, res) => {
    try {
        const lista = await Dados.findByPk(req.params.id);
        if(!lista) {
            return res.status(404).json({mensage: 'Produto não cadastrado !'});
        }
        res.status(200).json(lista)
    } catch(error){
        console.error(error);
        res.status(500).json({mensage: 'Erro interno do servidor'})
    }
}
export const adicionarProdutos = async(req, res) => {
    try {
        const { produto, preco } = (req.body)
        if(!produto || !preco || produto.length === 0 || preco.length === 0) {
            return res.status(404).json({mensage: 'Todos os campos devem está preenchidos !'})
        } else {
            const add = await Dados.create({produto, preco,});
            res.status(200).json({mensage: 'Produto cadastrado com sucesso! ', add})
        }
    } catch(error){
        console.error(error);
        res.status(500).json({mensage: 'Erro interno do servidor'})
    }
}
export const editarProduto = async(req, res) => {
    try {
        const produto = await Dados.findByPk(req.params.id);
        if(!produto) res.status(404).json({mensage: 'produto não encontrado !'});
        await produto.update(req.body)
        res.status(202).json(produto)
    } catch (error){
        console.error(error);
        res.status(500).json({mensage: 'Erro interno do servidor'})
    }
}
export const deletarProduto = async(req, res) => {
    try {
        const produto = await Dados.findByPk(req.params.id)
        if(!produto) return res.status(404).json({mensage: 'produto não encontrado !'});
        await produto.destroy()
        res.status(202).json({ mensage: 'Excluido com sucesso !' })
    } catch(error) {
        console.error(error);
        res.status(500).json({mensage: 'Erro interno do servidor'})
    }
}