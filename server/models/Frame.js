const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class frame extends Model {}

frame.init(
    {
        frame: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'frame'
    }
)

module.exports = frame;