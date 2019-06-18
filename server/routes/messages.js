const express = require('express')
const router = express.Router()
const message = require('../models/message')
// Routes
module.exports = router

router.get('/', async (req, res) => {
    await message.getMessages()
    .then(messages => res.json(messages))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})


router.post('/', async (req, res) => {
    await message.insertMessage(req.body)
    .then(message => res.status(201).json({
        message,
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10)
    await message.updateMessage(id, req.body)
    .then(message => res.json({
        message,
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

module.exports = router;
