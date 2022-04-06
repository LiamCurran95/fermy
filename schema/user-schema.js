const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	avatarUrl: { type: String, required: false },
	newUser: { type: Boolean, required: true, default: true },
	theme: { type: String, required: true, default: "light" },
	created_at: { type: Date, default: Date.now },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
