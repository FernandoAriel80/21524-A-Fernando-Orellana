const { DataTypes, Sequelize, sequelize  } = require('../database');

const Admin = sequelize.define('Admin', {
    id_admin: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    clave: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'admin'
});

module.exports = Admin;


