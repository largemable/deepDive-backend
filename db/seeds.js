const seedData = require('./seeds.json');
const Album = require('../models/Album');

Album.deleteMany({})
	.then(() => {
		return Album.insertMany(seedData);
	})
	.then(console.log)
	.catch(console.error)
	.finally(process.exit);
