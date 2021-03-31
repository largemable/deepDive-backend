const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { createUserToken } = require('../middleware/auth');
const User = require('./../models/User');

// Get all
router.get('/', (req, res, next) => {
	User.find({})
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});

// Create one
// router.post('/signup', (req, res, next) => {
// 	User.create(req.body)
// 		.then((user) => res.status(201).json(user))
// 		.catch(next);
// });

router.post('/signup', (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => ({
			name: req.body.name,
			password: hash,
		}))
		.then((user) => User.create(user))
		.then((user) => res.status(201).json(user))
		.catch(next);
});

router.post('/signin', (req, res, next) => {
	User.findOne({ name: req.body.name })
		// Pass the user and the request to createUserToken
		.then((user) => createUserToken(req, user))
		// createUserToken will either throw an error that
		// will be caught by our error handler or send back
		// a token that we'll in turn send to the client.
		.then((token) => res.json({ token }))
		.catch(next);
});

// UPDATE
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const userData = req.body;
	User.findOneAndUpdate({ _id: id }, userData, { new: true })
		.then((user) => res.json(user))
		.catch(next);
});

// Delete
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	User.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
