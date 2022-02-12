import { gql } from "@apollo/client";

export const CREATE_PATIENT = gql`
    mutation addPatient($patientFirstName: String!, $patientLastName: String!, $dateOfBirth: String!, $address: String, $city: String, $state: String, $zipCode: Int, $phoneNumber: String!) {
        addPatient(patientFirstName: $patientFirstName, patientLastName: $patientLastName, dateOfBirth: $dateOfBirth, address: $address, city: $city, state: $state, zipCode: $zipCode, phoneNumber: $phoneNumber) {
            _id
            patientFirstName
            patientLastName
            dateOfBirth
            address
            city
            state
            zipCode
            phoneNumber
        }
    }
`