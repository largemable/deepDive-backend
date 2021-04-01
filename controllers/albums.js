// albums.js controller
const express = require('express');
const router = express.Router();
const Album = require('./../models/Album');
const { requireToken } = require('../middleware/auth');

// INDEX
// GET /albums
router.get('/', (req, res, next) => {
	Album.find()
		.populate('reviews.reviewer')
		.then((albums) => res.json(albums))
		.catch(next);
});

// SHOW
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Album.findById(id)
		.then((album) => res.json(album))
		.catch(next);
});

// CREATE
router.post('/', requireToken, (req, res, next) => {
	const albumData = req.body;
	Album.create(albumData)
		.then((album) => res.status(201).json(album))
		.catch(next);
});

// UPDATE
router.patch('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	const albumData = req.body;
	Album.findOneAndUpdate({ _id: id }, albumData, { new: true })
		.then((album) => res.json(album))
		.catch(next);
});

// DESTROY
router.delete('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	Album.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
