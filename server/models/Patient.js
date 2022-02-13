const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class patient extends Model {}

patient.init(
    {
        patient_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        zipCode: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'patient'
    }
)

module.exports = patient