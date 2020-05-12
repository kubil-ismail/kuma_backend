require('dotenv').config()
const { APP_PORT } = process.env
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// Set static folder root
app.use('/book/cover/', express.static('public/assets/cover'))
app.use('/profile/cover/', express.static('public/assets/profile'))

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to Kuma Backend')
})

// Import Routes
const auth = require('./src/routes/api/authRoutes')
const books = require('./src/routes/api/book/bookRoutes')
const bookAuthors = require('./src/routes/api/book/authorRoutes')

app.use('/auth', auth) // Auth Route
app.use('/book', books) // Books Route
app.use('/author', bookAuthors) // Book Authors Route

// Error Route
app.get('*', (req, res) => {
  res.status(400).send('Pages not found')
})

app.listen(APP_PORT || 3000, () => {
  console.log('Server run on port 3000')
})
