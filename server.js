// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

const students = require('./models/students')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

const studentRoutes = require('./routes/studentRoutes')

// Connect our routes to our express app
app.use('/students', studentRoutes)

// app.get('/future', (req, res) => {
//     res.send('Hello Future Students')
// })

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})