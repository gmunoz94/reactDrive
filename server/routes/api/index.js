const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const orderRoutes = require('./orderRoutes');
const frameRoutes = require('./frameRoutes')

router.use('/patients', patientRoutes);
router.use('/orders', orderRoutes);
router.use('/frames', frameRoutes);

module.exports = router;