// albums.js controller
const express = require('express');
const router = express.Router();
const Album = require('./../models/Album');

// INDEX
// GET /albums
router.get('/', (req, res, next) => {
    Album.find()
      .populate('reviews.reviewer')
      .then(albums => res.json(albums))
      .catch(next)
  })
  
  // SHOW
  // GET /albums/:id
  router.get('/:id', (req, res, next) => {
    const id = req.params.id
    Album.findById(id)
      .then(album => res.json(album))
      .catch(next)
  })
  
  // CREATE
  // POST /albums/
  router.post('/', (req, res, next) => {
    const albumData = req.body
    Album.create(albumData)
      .then(album => res.status(201).json(album))
      .catch(next)
  })
  
  // UPDATE
  // PATCH /albums/:id
  router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    const albumData = req.body
    Album.findOneAndUpdate({_id: id }, albumData, {new: true})
      .then(album => res.json(album))
      .catch(next)
  })
  
  // DESTROY
  // DELETE /albums/:id
  router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Album.findOneAndDelete({_id: id})
      .then(() => res.sendStatus(204))
      .catch(next)
  })
  
  module.exports = router