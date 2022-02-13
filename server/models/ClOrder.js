const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class clOrder extends Model {}

clOrder.init(
    {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        dateOfBirth: {
            type: DataTypes.STRING
        },
        phoneNumber: {
            type: DataTypes.STRING
        },
        orderDate: {
            type: DataTypes.DATEONLY
        },
        odBoxes: {
            type: DataTypes.INTEGER
        },
        odBoxType: {
            type: DataTypes.STRING
        },
        osBoxes: {
            type: DataTypes.INTEGER
        },
        osBoxType: {
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
        modelName: 'clOrder'
    }
)

module.exports = clOrder