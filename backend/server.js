const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const usersRouter = require("./routes/users");
const User = require("./models/user.model");
const userModel = require("./models/user.model");
const { response } = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use("/users", usersRouter); // Ini refactor aja biar rapi
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "raya raya karya",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ======
//AUTH
// ======

app.post("/register", (req, res) => {
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.render("register");
    }
    passport.authenticate("local")(req, res, () => {
      res.send("Success!");
      console.log("user added");
    });
  });
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send();
});

app.post("/logout", (req, res) => {
  req.logout();
  res.send();
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
