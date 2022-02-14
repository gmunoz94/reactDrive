const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    // DB Name
    process.env.DB_NAME,
    // DB User
    process.env.DB_USER,
    // DB Password
    process.env.DB_PASSWORD,
    {
        // DB Location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;