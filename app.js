import express from "express";

require('dotenv').config()

const app = express();

// Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening in port ${PORT}`)
})
