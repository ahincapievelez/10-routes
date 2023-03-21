const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const studentController = require('../controllers/studentController')

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', studentController.index)

router.get('/routeone', studentController.routeone)

router.get('/routetwo', studentController.routetwo)

router.get('/routethree', studentController.routethree)

router.get('/routefour', studentController.routefour)

router.get('/routefive', studentController.routefive)

router.get('/routesix', studentController.routesix)

router.get('/routeseven', studentController.routeseven)

router.get('/routeeight', studentController.routeeight)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:id', studentController.show)

module.exports = router