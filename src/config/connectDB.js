const { Sequelize, Model } = require('sequelize');



const sequelize = new Sequelize('quanlycuahangmaytinh', 'root', '1234', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
})



let connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connection