const patient = require('./Patient');
const glOrder = require('./GlOrder');
const clOrder = require('./ClOrder');
const frame = require('./Frame');

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

module.exports = { patient, glOrder, clOrder, frame };