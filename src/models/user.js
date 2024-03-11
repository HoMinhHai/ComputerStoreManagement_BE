'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    }
    User.init({
        Email: DataTypes.STRING(500),
        Password: DataTypes.STRING(500),
        FirstName: DataTypes.STRING(200),
        LastName: DataTypes.STRING(200),
        Address: DataTypes.STRING(500),
        PhoneNumber: DataTypes.STRING,
        Gender: DataTypes.BOOLEAN,
        Image: DataTypes.STRING,
        RoleId: DataTypes.STRING,
        PositionId: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};