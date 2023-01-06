const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const passport = require("passport");

const local = require("../strategy/local");

router.get("/", (req, res) => {
    res.render("../views/home.ejs");
});

router.get("/login", (req, res) => {
    res.render("../views/login.ejs");
});

router.get("/sign-up", (req, res) => {
    res.render("../views/sign-up-form.ejs");
});

router.post("/sign-up", UserController.addUser);

router.get("/login-failure", (req, res) => {
    res.send("<h1>Failed</h1>");
});

router.get("/login-sulogin-success", (req, res) => {
    res.send("<h1>success</h1>");
});

router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login-failure",
        successRedirect: "login-success",
    })
);

module.exports = router;
