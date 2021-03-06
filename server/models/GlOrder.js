const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class glOrder extends Model {}

glOrder.init(
    {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
        frameBrand: {
            type: DataTypes.STRING
        },
        frameModel: {
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

module.exports = glOrder;