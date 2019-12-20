const express = require('express')
const router = express.Router()
const Presupuesto = require('../../models/Presupuesto.model')


router.get('/', (req,res) => {
    res.send('asd')
})

router.post('/', (req, res) => {
    const prespuesto = new Presupuesto({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })
    prespuesto.save()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

module.exports = router