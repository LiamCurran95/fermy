require("dotenv").config();

const seedDB = async () => {
	const mongoose = require("mongoose");
	const uri = process.env.TEST_DB_CONNECTION;
	console.log(process.env);

	const Users = require("../schema/user-schema");
	const userData = require("./seed_test_data/user-test");

	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		await mongoose.connection.db.dropCollection("users", () => {});
		await Users.insertMany(userData);
	} catch (error) {
		console.log(error);
	} finally {
		await mongoose.connection.close();
	}
};
seedDB();
module.exports = seedDB;
