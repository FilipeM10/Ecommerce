import Dados from '../models/produtos.js'
import { Op } from 'sequelize'

export const excluidos = async (req, res) => {
    try {
        const exc = await Dados.findAll({
            where:{
                deletedAt: { [Op.ne]: null }
            },
            paranoid: false
        });
        if(!exc || exc.length === 0) return res.status(404).json('Não há produtos cadastrados !');
        return res.status(200).json(exc);
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({ mensage: 'Erro interno do servidor' });
    }
}
export const dadosGerais = async (req, res) => {
    try{
        const gerais = await Dados.findAll({ paranoid: false });
        if(!gerais || gerais.length === 0) return res.status(404).json('Não há produtos cadastrados !');
        return res.status(200).json(gerais);
    } catch(error) {
        console.error(error)
        return res.status(500).json({ mensage: 'Erro interno do servidor'})
    }
}