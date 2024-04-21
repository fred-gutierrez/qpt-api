let express = require("express")

require('dotenv').config()
require("./config/db.js")

const app = express();

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/api.js'))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening in port ${PORT} \n`)
  console.log(`List of available routes:`)
  console.log(`
- http://localhost:3000/api/skills
`)
})
