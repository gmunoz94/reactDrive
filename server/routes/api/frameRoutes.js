const router = require('express').Router();

const frame = require('../../models/Frame');

router.get('/', (req, res) => {
    frame.findAll({
        order: ['frame']
    }).then((frameData) => {
        res.json(frameData);
    })
})

module.exports = router;