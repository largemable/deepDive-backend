const express = require('express')
const router = express.Router()

const User = require('./../models/User')

// Get all
router.get('/', (req, res, next) => {
    User.find({}).then((user) => {
        res.json(user);
    }).catch(next)
})

// Create one
router.post('/', (req, res, next) => {
    User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
})

  // UPDATE
  router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    const userData = req.body
    User.findOneAndUpdate({_id: id }, userData, {new: true})
      .then(user => res.json(user))
      .catch(next)
  })


// Delete
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    User.findOneAndDelete({_id: id})
      .then(() => res.sendStatus(204))
      .catch(next)
  })





module.exports = router;