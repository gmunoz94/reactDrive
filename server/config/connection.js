const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    // DB Name
    'newcruddb',
    // DB User
    'root',
    // DB Password
    'root',
    {
        // DB Location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;