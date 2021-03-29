const express = require('express')
const router = express.Router()

// require album model
const Album = require('./../models/Album')

// CREATE
// POST /reviews/
router.post('/', (req, res, next) => {
  // get the review data from the body of the request
  const reviewData = req.body
  // get the album id from the body
  const albumId = reviewData.albumId
  // find the album by its id
  Album.findById(albumId)
    .then(album => {
      // add review to album
      album.reviews.push(reviewData)
      // save album
      return album.save()
    })
    // send responsne back to client
    .then(album => res.status(201).json({album: album}))
    .catch(next)
})

// DESTROY
// DELETE /reviews/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Album.findOne({ 'reviews._id': id })
    .then(album => {
        album.reviews.id(id).remove()
      return album.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /reviews/:id
router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const reviewData = req.body

  Album.findOne({
    'reviews._id': id,
  })
    .then(album => {
      const review = album.reviews.id(id)
      review.set(reviewData)
      return album.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router