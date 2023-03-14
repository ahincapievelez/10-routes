const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const studentController = require('../controllers/studentController')

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', studentController.index)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:id', studentController.show)

module.exports = router