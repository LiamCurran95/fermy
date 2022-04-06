const mongoose = require("mongoose");

const { Schema } = mongoose;

const imageSchema = new Schema({
	Image: {
		type: String,
		required: true,
	},
	created_at: { type: Date, default: Date.now },
});

const Images = mongoose.model("Image", imageSchema);

module.exports = Images;
