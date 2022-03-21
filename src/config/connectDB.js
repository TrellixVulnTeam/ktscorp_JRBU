const { Sequelize } = require('sequelize');
require("dotenv").config();
// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_NAME, 'root', process.env.DB_PWD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối DB thành công!');
    } catch (error) {
        console.error('Lỗi kết nối DB:', error);
    }
};

module.exports = connectDB;