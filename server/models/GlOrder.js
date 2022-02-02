const { Schema, model } = require('mongoose');

const glOrderSchema = new Schema({
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
    frame: {
        type: String,
        required: true
    },
    lensType: {
        type: String,
        required: true,
    },
    frameLocation: {
        type: String,
        required: true,
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
    }
})

const GlOrder = model('GlOrder', glOrderSchema);

module.exports = GlOrder;