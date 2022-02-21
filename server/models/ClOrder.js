const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class clOrder extends Model {}

clOrder.init(
    {
        patient_id: {
            type:DataTypes.INTEGER,
            references: {
             model: 'patients',
             key: 'patient_id'
              } 
        },
        orderDate: {
            type: DataTypes.DATEONLY
        },
        odBoxes: {
            type: DataTypes.STRING
        },
        odBoxType: {
            type: DataTypes.STRING
        },
        osBoxes: {
            type: DataTypes.STRING
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