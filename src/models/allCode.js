'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AllCode extends Model {
        static associate(models) {
            // define association here
        }
    }
    AllCode.init({
        Key: DataTypes.STRING(100),
        Type: DataTypes.STRING(200),
        ValueEn: DataTypes.STRING(200),
        ValueVi: DataTypes.STRING(200)
    }, {
        sequelize,
        modelName: 'AllCode',
    });
    return AllCode;
};