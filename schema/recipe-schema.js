const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipeSchema = new Schema({
	username: { type: String, required: true },
	recipe_title: [{ type: String, required: true }],
	image: imageSchema,
	description: [{ type: String, required: true }],
	category: [{ type: String, required: true }],
	instructions: [{ type: String, required: true }],
	ingredient_items: [{ type: String, required: true }],
	ingredient_quantities: [{ type: String, required: true }],
	ingredient_metric: [{ type: String, required: true }],
	equipment: [String],
	yield: [String],
	time_to_complete: [{ type: Number, required: true }],
	created_at: { type: Date, default: Date.now },
	comments: [
		{ username: String },
		{ comment: String },
		{ created_at: { type: Date, default: Date.now } },
		{ comment_id: Number },
	],
});

const Recipes = mongoose.model("Recipe", recipeSchema);

module.exports = Recipes;
