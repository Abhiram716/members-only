const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true },
    name: { type: String, required: true, maxlength: 20 },
    password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
