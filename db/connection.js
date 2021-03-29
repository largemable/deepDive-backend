const mongoose = require('mongoose');
const mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.DB_URL
		: 'mongodb://localhost/caffeine-dreams';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to Caffeine Dreamzzzz');
	})
	.catch(() => {
		console.log('connection failed!');
	});

module.exports = mongoose;
