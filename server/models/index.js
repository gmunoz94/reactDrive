const patient = require('./patient');
const glOrder = require('./glOrder');
const clOrder = require('./clOrder');

patient.hasMany(glOrder, {
    foreignKey: 'patient_id',
})
patient.hasMany(clOrder, {
    foreignKey: 'patient_id',
})

glOrder.belongsTo(patient, {
    foreignKey: 'patient_id',
})
clOrder.belongsTo(patient, {
    foreignKey: 'patient_id',
})

module.exports = { patient, glOrder, clOrder };