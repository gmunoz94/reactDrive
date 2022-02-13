const router = require('express').Router();
const patientRoutes = require('./patientRoutes');

router.use('/patients', patientRoutes);

module.exports = router;