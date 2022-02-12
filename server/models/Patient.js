const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
    patientFirstName: {
        type: String,
        required: "Need First Name",
    },
    patientLastName: {
        type: String,
        required: "Need Last Name",
    },
    dateOfBirth: {
        type: Date,
        required: "Date of Birth required.",
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: Number,
    },
    phoneNumber: {
        type: Number,
        required: "Need Phone Number"
    }
})

const Patient = model('Patient', patientSchema);

module.exports = Patient;