'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        static associate(models) {
            // define association here
        }
    }
    Clinic.init({
        Name: DataTypes.STRING,
        Address: DataTypes.STRING(500),
        Description: DataTypes.TEXT,
        Image: DataTypes.STRING(500),
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};