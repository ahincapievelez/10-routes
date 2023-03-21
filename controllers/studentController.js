const students = require('../models/students')

// The callback function originally from "app.get('/', () => {})"
function index(req, res) {
    res.render('students/Index', { students: students })
}

function routeone(req, res) {
    res.send('<h1>Hello this route one</h1><br/><a href="/students/routetwo">next page</a>')
}

function routetwo(req, res) {
    res.send('<h1>Hello this route two</h1><br/><a href="/students/routethree">next page</a>')
}

function routethree(req, res) {
    res.send('<h1>Hello this route three</h1><br/><a href="/students/routefour">next page</a>')
}

function routefour(req, res) {
    res.send('<h1>Hello this route four</h1><br/><a href="/students/routefive">next page</a>')
}

function routefive(req, res) {
    res.send('<h1>Hello this route five</h1><br/><a href="/students/routesix">next page</a>')
}

function routesix(req, res) {
    res.send('<h1>Hello this route six</h1><br/><a href="/students/routeseven">next page</a>')
}

function routeseven(req, res) {
    res.send('<h1>Hello this route seven</h1><br/><a href="/students/routeeight">next page</a>')
}

function routeeight(req, res) {
    res.send('<h1>Hello this route eight</h1><br/><a href="/students">next page</a>')
}

// They now have names: "index" and "show"
function show(req, res) {
    res.render('students/Show', { student: students[req.params.id]})
}

module.exports = { index, show, routeone, routetwo, routethree, routefour, routefive, routesix, routeseven, routeeight }