const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const Session = require("express-session");
const flash = require("express-flash");
const app = express();
require("dotenv").config();

// Set 'views' directory for any views
// being rendered res.render()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.use(flash());
app.use(
    Session({
        secret: process.env.SESSION_SECRET || "secret",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

const userRouter = require("./routes/user");
app.use("/api/v1", userRouter);

const Connection = require("./connect/connectDb");

Connection.db;
const PORT = process.env.PORT || 3000;

app.listen();
