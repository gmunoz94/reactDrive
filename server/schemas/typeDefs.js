const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Patient {
        _id: ID
        patientFirstName: String
        patientLastName: String
        dateOfBirth: String
        address: String
        city: String
        state: String
        zipCode: Int
        phoneNumber: String
    }

    type GlOrder {
        _id: ID
        patient: [Patient]
        orderDate: String!
        frame: String!
        lensType: String!
        frameLocation: String!
        moreOrders: String!
        lensLab: String!
        lensOrdered: String!
        arrivalStatus: String
        readyStatus: String
        receivedStatus: String
        dispenseStatus: String
    }

    type ClOrder {
        _id: ID
        patient: [Patient]
        orderDate: String!
        ODboxes: Int
        ODboxType: String
        OSboxes: Int
        OSboxType: String
        moreOrders: String!
        lensLab: String!
        lensOrdered: String!
        arrivalStatus: String
        readyStatus: String
        receivedStatus: String
        dispenseStatus: String
    }

    type Query {
        patient: [Patient]
        getPatient(_id: ID): Patient
        getGlOrders: [GlOrder]
        getClOrders: [ClOrder]
    }

    type Mutation {
        addPatient(patientFirstName: String!, patientLastName: String!, dateOfBirth: String!, address: String, city: String, state: String, zipCode: Int, phoneNumber: String!): Patient
    }
`;

module.exports = typeDefs;