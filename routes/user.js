const express = require("express");
const router = express.Router();
const User = require("../controllers/userController");
const strategy = require("../strategy/local");
const passport = require("passport");

strategy.initialize(passport);

router.get("/", (req, res) => {
    res.render("../views/home.ejs");
});

router.get("/login", (req, res) => {
    res.render("../views/login.ejs");
});

router.get("/sign-up", (req, res) => {
    res.render("../views/sign-up-form.ejs");
});

router.post("/sign-up", User.addUser);

router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/sign-up",
        failureRedirect: "/api/v1/login",
        failureFlash: true,
    })
);

module.exports = router;
