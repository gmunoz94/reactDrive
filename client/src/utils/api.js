export const createPatient = (patientData) => {
    return fetch('/api/patient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData)
    });
};