import { DataTypes } from 'sequelize'
import database from '../config/database.js'

const Usuario = database.define('usuario', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cadastro_usuario',
    timestamps: true
})

export default Usuario;
