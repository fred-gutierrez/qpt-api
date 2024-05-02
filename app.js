<<<<<<< HEAD
require('dotenv').config()
require("./config/db.js")

const express = require("express");
const cors = require('cors')

// Auth Imports
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./auth/passport.js")
const authRouter = require("./routes/auth.js")

=======
>>>>>>> origin/main
let express = require("express")

require('dotenv').config()
require("./config/db.js")

const app = express();

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/api.js'))

<<<<<<< HEAD
// Auth
app.use(cookieSession({
  name: 'session',
  keys: [],
  maxAge: 24 * 60 * 60 * 1000
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
)

=======
>>>>>>> origin/main
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening in port ${PORT} \n`)
  console.log(`List of available routes:`)
  console.log(`
- http://localhost:3000/api/skills
`)
})
