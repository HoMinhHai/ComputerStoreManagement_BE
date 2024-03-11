'use strict';
//import sequelize from '../models'
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Email: {
                type: Sequelize.STRING(500),
                allowNull: false,
            },
            Password: {
                type: Sequelize.STRING(500),
                allowNull: false,
            },
            FirstName: {
                type: Sequelize.STRING(200)
            },
            LastName: {
                type: Sequelize.STRING(200)
            },
            Address: {
                type: Sequelize.STRING(500)
            },
            PhoneNumber: {
                type: Sequelize.STRING
            },
            Gender: {
                type: Sequelize.BOOLEAN
            },

            Image: {
                type: Sequelize.STRING
            },
            RoleId: {
                type: Sequelize.STRING
            },

            PositionId: {
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
        await queryInterface.dropTable('Users');
    }
};