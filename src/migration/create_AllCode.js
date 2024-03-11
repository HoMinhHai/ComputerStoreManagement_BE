'use strict';
//import sequelize from '../models'
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('AllCodes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Key: {
                type: Sequelize.STRING(100)
            },
            Type: {
                type: Sequelize.STRING(200),

            },
            ValueEn: {
                type: Sequelize.STRING(200)
            },
            ValueVi: {
                type: Sequelize.STRING(200)
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
        await queryInterface.dropTable('AllCodes');
    }
};