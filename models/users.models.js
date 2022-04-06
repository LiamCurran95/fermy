const mongoose = require("mongoose");

const uri = process.env.TEST_ATLAS_CONNECTION;
const User = require("../schema/user-schema");

exports.fetchUsers = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const data = await User.find({});
		return data;
	} catch (error) {
		console.log(error);
	} finally {
		await mongoose.connection.close();
	}
};
