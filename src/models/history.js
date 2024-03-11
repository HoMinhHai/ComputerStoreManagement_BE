'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        static associate(models) {
            // define association here
        }
    }
    History.init({
        PatientId: DataTypes.INTEGER,
        DoctorId: DataTypes.INTEGER,
        Description: DataTypes.TEXT,
        Files: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};