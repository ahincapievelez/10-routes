const students = require('../models/students')

// The callback function originally from "app.get('/', () => {})"
function index(req, res) {
    res.render('students/Index', { students: students })
}

// They now have names: "index" and "show"
function show(req, res) {
    res.render('students/Show', { student: students[req.params.id]})
}

module.exports = { index, show }