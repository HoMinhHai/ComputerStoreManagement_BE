'use strict';
//import sequelize from '../models'
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Schedules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            CurrentNumber: {
                type: Sequelize.INTEGER
            },
            MaxNumber: {
                type: Sequelize.INTEGER,

            },
            Date: {
                type: Sequelize.DATE
            },
            TimeType: {
                type: Sequelize.STRING
            },
            DoctorId: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Schedules');
    }
};