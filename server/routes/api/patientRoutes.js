const router = require('express').Router();

const Patient = require('../../models/Patient');

router.post('/', (req, res) => {
    Patient.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode
    })
    .then((newPatient) => {
        res.json(newPatient)
    })
    .catch((err) => {
        res.json(err)
    })
})

router.get('/all', (req, res) => {
    Patient.findAll({
        order: ['lastName'],
    }).then((patientData) => {
        res.json(patientData);
    });
});

module.exports = router;