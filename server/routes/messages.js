const express = require('express')
const router = express.Router()
const message = require('../models/message')
// Routes
module.exports = router
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.json({message: 'hscsasdf'});
// });

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
    await message.updateMessage()
    .then(messages => res.json(messages))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/', )

module.exports = router;
