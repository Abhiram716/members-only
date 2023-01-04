const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.addUser = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        let user = new User({
            userName: req.body.userName,
            name: req.body.name,
            password: hashedPassword,
        });
        let newUser = await user.save();
        res.status(201);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
