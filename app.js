require('dotenv').config()
require("./config/db.js")

const express = require("express");
const cors = require("cors")

// Auth Imports
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportStrategy = require("./passport.js")

const app = express();

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/api.js'))

// Auth
app.use(cookieSession({
  name: 'session',
  keys: ["fred"],
  maxAge: 24 * 60 * 60 * 100,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: "localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
)

app.use('/auth', require('./routes/auth.js'))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening in port ${PORT}`)
})
