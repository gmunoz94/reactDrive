const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Patient {
        _id: ID
        patientFirstName: String
        patientLastName: String
        dateOfBirth: Date
        address: String
        city: String
        state: String
        zipCode: Number
        phoneNumber: Number
    }

    type GlOrder {
        _id: ID
        patient: [Patient]
        orderDate: Date
        frame: String
        lensType: String,
        frameLocation: String,
        moreOrders: String,
        lensLab: String,
        lensOrdered: String,
        arrivalStatus: String,
        readyStatus: String,
        receivedStatus: String,
        dispenseStatus: String,
    }

    type ClOrder {
        _id: ID
        patient: [Patient]
        orderDate: Date,
        ODboxes: Number,
        ODboxType: String,
        OSboxes: Number,
        OSboxType: String,
        moreOrders: String,
        lensLab: String,
        lensOrdered: String,
        arrivalStatus: String,
        readyStatus: String,
        receivedStatus: String,
        dispenseStatus: String,
    }

    type Mutation {
        addPatient(patientFirstName: String!, patientLastName: String!, dateOfBirth: Date!, address: String, city: String, state: String, zipCode: Number, phoneNumber, Number!): Patient
    }
`;

module.exports = typeDefs;