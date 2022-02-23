const router = require('express').Router();
const { Op } = require('sequelize');

const clOrder = require('../../models/ClOrder');
const glOrder = require('../../models/GlOrder');

router.post('/glOrder/:patient_id', (req, res) => {
    console.log(req.body)
    glOrder.create({
        patient_id: req.body.patient_id,
        orderDate: req.body.orderDate,
        frameBrand: req.body.frameBrand,
        frameModel: req.body.frameModel,
        lensType: req.body.lensType,
        location: req.body.location,
        moreOrders: req.body.moreOrders,
        lab: req.body.lab
    }).then((newOrder) => {
        res.json(newOrder);
    }).catch((err) => {
        res.json(err);
    })
})

router.put('/glOrder/:patient_id/:order_id', (req, res) => {
    glOrder.update({
        orderDate: req.body.orderDate,
        frameBrand: req.body.frameBrand,
        frameModel: req.body.frameModel,
        lensType: req.body.lensType,
        location: req.body.location,
        moreOrders: req.body.moreOrders,
        lab: req.body.lab,
        ordered: req.body.ordered,
        arrival: req.body.arrival,
        ready: req.body.ready,
        received: req.body.received,
        dispensed: req.body.dispensed
        },
        {
            where: {
                patient_id: req.params.patient_id,
                order_id: req.params.order_id,
            },
        }
    ).then((orderData) => {
        res.json(orderData)
    })
})

router.get('/glOrder/:patient_id', (req, res) => {
    glOrder.findAll({
        where: {
            patient_id: req.params.patient_id
        }
    }).then((orderData) => {
        res.json(orderData);
    })
})

router.get('/glOrder/:patient_id/pending', (req, res) => {
    glOrder.findAll({
        where: {
            patient_id: req.params.patient_id,
            dispensed: null
        }
    }).then((orderData) => {
        res.json(orderData);
    })
})

router.get('/glOrder/:patient_id/complete', (req, res) => {
    glOrder.findAll({
        where: {
            patient_id: req.params.patient_id,
            dispensed: 'yes'
        }
    }).then((orderData) => {
        res.json(orderData);
    })
})

router.post('/clOrder/:patient_id', (req, res) => {
    console.log(req.body)
    clOrder.create({
        patient_id: req.body.patient_id,
        orderDate: req.body.orderDate,
        odBoxes: req.body.odBoxes,
        odBoxType: req.body.odBoxType,
        osBoxes: req.body.osBoxes,
        osBoxType: req.body.osBoxType,
        moreOrders: req.body.moreOrders,
        lab: req.body.lab
    }).then((newOrder) => {
        res.json(newOrder);
    }).catch((err) => {
        res.json(err);
    })
})

router.put('/clOrder/:patient_id/:order_id', (req, res) => {
    clOrder.update({
        patient_id: req.body.patient_id,
        orderDate: req.body.orderDate,
        odBoxes: req.body.odBoxes,
        odBoxType: req.body.odBoxType,
        osBoxes: req.body.osBoxes,
        osBoxType: req.body.osBoxType,
        moreOrders: req.body.moreOrders,
        lab: req.body.lab,
        ordered: req.body.ordered,
        arrival: req.body.arrival,
        ready: req.body.ready,
        received: req.body.received,
        dispensed: req.body.dispensed
        },
        {
            where: {
                patient_id: req.params.patient_id,
                order_id: req.params.order_id,
            },
        }
    ).then((orderData) => {
        res.json(orderData)
    })
})

router.get('/clOrder/:patient_id', (req, res) => {
    clOrder.findAll({
        where: {
            patient_id: req.params.patient_id
        }
    }).then((orderData) => {
        res.json(orderData);
    })
})

router.get('/clOrder/:patient_id/pending', (req, res) => {
    clOrder.findAll({
        where: [{
            patient_id: req.params.patient_id,
            dispensed: null
        }]
    }).then((orderData) => {
        res.json(orderData);
    })
})

router.get('/clOrder/:patient_id/complete', (req, res) => {
    clOrder.findAll({
        where: [{
            patient_id: req.params.patient_id,
            dispensed: 'yes'
        }]
    }).then((orderData) => {
        res.json(orderData);
    })
})

module.exports = router;