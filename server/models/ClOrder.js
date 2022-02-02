const { Schema, model } = require('mongoose');

const clOrderSchema = new Schema({
    patient: [
        {
            patientFirstName: {
                type: String
            },
            patientLastName: {
                type: String
            },
            dateOfBirth: {
                type: Date,
            },
            phoneNumber: {
                type: Number,
            }
        }
    ],
    orderDate: {
        type: Date,
        required: true,
    },
    ODboxes: {
        type: Number,
        default: 0
    },
    ODboxType: {
        type: String,
    },
    OSboxes: {
        type: Number,
        default: 0
    },
    OSboxType: {
        type: String,
    },
    moreOrders: {
        type: String,
        required: true,
    },
    lensLab: {
        type: String,
        required: true,
    },
    lensOrdered: {
        type: String,
        required: true,
    },
    arrivalStatus: {
        type: String,
    },
    readyStatus: {
        type: String,
    },
    receivedStatus: {
        type: String,
    },
    dispenseStatus: {
        type: String,
    },
})

const ClOrder = model('ClOrder', clOrderSchema);

module.exports = ClOrder;