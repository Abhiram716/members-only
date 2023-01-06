const express = require("express");
const path = require("path");
const userRouter = require("./routes/user");
const Session = require("express-session");
const passport = require("passport");
const Connection = require("./connect/connectDb");
const initializePassport = require("./strategy/local");
const flash = require("express-flash");
const app = express();
require("dotenv").config();

// Set 'views' directory for any views
// being rendered res.render()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

initializePassport(
    passport,
    (email) => users.find((user) => user.email === email),
    (id) => users.find((user) => user.id === id)
);

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));
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

app.use("/api/v1", initializePassport, userRouter);

Connection.db;

const PORT = process.env.PORT || 3000;

app.listen(PORT);
