const router = require('express').Router();

const clOrder = require('../../models/ClOrder');
const glOrder = require('../../models/GlOrder');

router.post('/', (req, res) => {
    clOrder.create({

    })
})

module.exports = router;