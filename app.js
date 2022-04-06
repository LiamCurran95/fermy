require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const atlas = process.env.TEST_ATLAS_CONNECTION;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//USERS
const { getUsers } = require("./controllers/users.controllers");

//USERS
app.get("/api/users", getUsers);

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
	console.log(`Successfully served on port: ${PORT}`);
});

module.exports = app;
