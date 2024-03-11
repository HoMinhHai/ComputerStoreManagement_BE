'use strict';
//import sequelize from '../models'
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Doctor_Clinic_Specialties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            DoctorId: {
                type: Sequelize.INTEGER
            },
            ClinicId: {
                type: Sequelize.INTEGER,

            },
            SpecialtyId: {
                type: Sequelize.INTEGER
            },
            Date: {
                type: Sequelize.DATE
            },
            TimeType: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Doctor_Clinic_Specialties');
    }
};