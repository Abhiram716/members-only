const mongoose = require("mongoose");
require("dotenv").config();

const mongoDb = process.env.DB_URL || "mongodb://localhost/members-only";
mongoose.connect(mongoDb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

exports.db = mongoose.Connection;
