const { fetchUsers } = require("../models/users.models");

exports.getUsers = (res, next) => {
	fetchUsers()
		.then((result) => {
			res.status(200).send({ result });
		})
		.catch((err) => {
			console.log(err);
			next(err);
		});
};
