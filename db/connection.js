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

// const DB_URL = mongodb+srv://caffeine-dreams:k6l3LXnOIc62moON@cluster0.0kym9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = mongoose;
