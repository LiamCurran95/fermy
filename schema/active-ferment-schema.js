const mongoose = require("mongoose");

const { Schema } = mongoose;

const activeFermentsSchema = new Schema({});

const ActiveFerments = mongoose.model("Active Ferments", activeFermentsSchema);

module.exports = ActiveFerments;
