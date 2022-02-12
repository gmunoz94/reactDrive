import { gql } from '@apollo/client';

export const QUERY_PATIENTS = gql`
    query patient {
        patient {
            _id
            patientFirstName
            patientLastName
            dateOfBirth
            phoneNumber
        }
    }
`;