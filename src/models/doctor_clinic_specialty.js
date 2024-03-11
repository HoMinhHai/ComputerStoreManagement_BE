'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinic_Specialty extends Model {
        static associate(models) {
            // define association here
        }
    }
    Doctor_Clinic_Specialty.init({
        DoctorId: DataTypes.INTEGER,
        ClinicId: DataTypes.INTEGER,
        SpecialtyId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Doctor_Clinic_Specialty',
    });
    return Doctor_Clinic_Specialty;
};