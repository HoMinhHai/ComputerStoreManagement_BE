'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        static associate(models) {
            // define association here
        }
    }
    Schedule.init({
        CurrentNumber: DataTypes.INTEGER,
        MaxNumber: DataTypes.INTEGER,
        Date: DataTypes.DATE,
        TimeType: DataTypes.STRING,
        DoctorId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};