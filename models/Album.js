const mongoose = require('../db/connection');

//ONE-TO-MANY: SUBDOCUMENT model

const reviewSchema = require('./Review');

const albumSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		artist: {
			type: String,
			required: true,
		},
		genre: {
			type: String,
			required: true,
		},
		artwork: {
			type: String,
		},
		year: {
			type: Number,
		},
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Album', albumSchema);
