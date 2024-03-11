'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        static associate(models) {
            // define association here
        }
    }
    Specialty.init({
        Name: DataTypes.STRING,
        Image: DataTypes.STRING,
        Description: DataTypes.TEXT,

    }, {
        sequelize,
        modelName: 'Specialty',
    });
    return Specialty;
};