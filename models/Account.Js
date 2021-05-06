const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Account extends Model {}

Account.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        account_name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'account',
    },
);

module.exports = Account;