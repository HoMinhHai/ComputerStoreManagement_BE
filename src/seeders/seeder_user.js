'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [{
            Email: "admin@gmail.com",
            Password: "admin",
            FirstName: "Minh Hai",
            LastName: "Ho",
            Address: "Viet Nam",
            Gender: 1,

            RoleId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },

        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
