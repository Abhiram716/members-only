const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.addUser = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        let user = new User({
            userName: req.body.userName,
            password: hashedPassword,
        });
        await user.save();
        res.send("users added");
        // res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


