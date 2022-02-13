const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class glOrder extends Model {}

glOrder.init(
    {
        firstName: {
            type: DataTypes.STRING,
            references: {
                model: 'Patient',
                key: 'firstName'
            }
        },
        lastName: {
            type: DataTypes.STRING,
            references: {
                model: 'Patient',
                key: 'lastName'
            }
        },
        dateOfBirth: {
            type: DataTypes.STRING,
            references: {
                model: 'Patient',
                key: 'dateOfBirth'
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            references: {
                model: 'Patient',
                key: 'phoneNumber'
            }
        },
        orderDate: {
            type: DataTypes.DATEONLY
        },
        frame: {
            type: DataTypes.STRING
        },
        lensType: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        moreOrders: {
            type: DataTypes.STRING
        },
        lab: {
            type: DataTypes.STRING
        },
        ordered: {
            type: DataTypes.STRING
        },
        arrival: {
            type: DataTypes.STRING
        },
        ready: {
            type: DataTypes.STRING
        },
        received: {
            type: DataTypes.STRING
        },
        dispensed: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: 'glOrder'
    }
)

module.exports = glOrder