const router = require('express').Router();
const { Op } = require('sequelize');

const patient = require('../../models/Patient.js');

router.post('/', (req, res) => {
    patient.create({
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

router.get('/searchLast/:lastName/', (req, res) => {
    patient.findAll({
        where: {
            lastName: {
                [Op.like]: req.params.lastName + '%'
            },
        },
        order: ['lastName']
    }).then((patientData) => {
        res.json(patientData);
    })
})

router.get('/searchFirst/:firstName/', (req, res) => {
    patient.findAll({
        where: {
            firstName: {
                [Op.like]: req.params.firstName + '%'
            },
        },
        order: ['lastName']
    }).then((patientData) => {
        res.json(patientData);
    })
})

router.get('/searchDOB/:dateOfBirth', (req, res) => {
    patient.findAll({
        where: {
            dateOfBirth: req.params.dateOfBirth,
        },
        order: ['lastName']
    }).then((patientData) => {
        res.json(patientData);
    })
})

router.get('/searchLastFirst/:lastName/:firstName', (req, res) => {
    patient.findAll({
        where: {
            lastName: {
                [Op.like]: req.params.lastName + '%'
            },
            firstName: {
                [Op.like]: req.params.firstName + '%'
            },
        },
        order: ['lastName']
    }).then((patientData) => {
        res.json(patientData);
    })
})

router.get('/searchAll/:lastName/:firstName/:dateOfBirth', (req, res) => {
    patient.findAll({
        where: {
            lastName: {
                [Op.like]: req.params.lastName + '%'
            },
            firstName: {
                [Op.like]: req.params.firstName + '%'
            },
            dateOfBirth: req.params.dateOfBirth
        },
        order: ['lastName']
    }).then((patientData) => {
        res.json(patientData);
    })
})

router.get('/:patient_id', (req, res) => {
    patient.findAll({
        where: {
            patient_id: req.params.patient_id,
        }
    }).then((patientData) => {
        res.json(patientData);
    });
});

router.put('/:patient_id', (req, res) => {
    patient.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode
        },
        {
            where: {
                patient_id: req.params.patient_id,
            },
        }
    )
})

module.exports = router;