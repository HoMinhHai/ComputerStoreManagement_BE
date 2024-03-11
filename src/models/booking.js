'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            // define association here
        }
    }
    Booking.init({
        StatusId: DataTypes.STRING(100),
        DoctorId: DataTypes.INTEGER,
        PatientId: DataTypes.INTEGER,
        Date: DataTypes.DATE,
        TimeType: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};