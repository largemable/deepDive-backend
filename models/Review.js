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
		}
	},
	{
		timestamps: true,
	}
);

module.exports = reviewSchema;
