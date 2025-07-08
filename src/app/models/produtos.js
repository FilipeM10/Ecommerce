import { DataTypes } from 'sequelize';
import database from '../config/database.js';

const Produtos = database.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: DataTypes.DECIMAL,
    descricao: DataTypes.TEXT
}, {
    tableName: 'tabelas_produto',
    timestamps: true,
    paranoid: true,
    deletedAt: 'deletedAt'
});

export default Produtos;