const mongoose = require('../db/connection');

const reviewSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		reviewer: {
			type: mongoose.Schema.Types.ObjectId,
			// ref: 'User'
		},
	},
	{
		timestamps: true,
	}
);

module.exports = reviewSchema;
