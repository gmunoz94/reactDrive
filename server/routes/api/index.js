const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/patients', patientRoutes);
router.use('/orders', orderRoutes);

module.exports = router;