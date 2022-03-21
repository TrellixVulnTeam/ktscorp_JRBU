
const db = require("../models/index");
const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const isAdmin = require('../middleware/role')
const ktsServices = require('../services/ktsServices')

router.get('/', verifyToken, (req, res) => {
    res.render('admin/home')
})
router.get('/users', verifyToken, async (req, res) => {
    const data = await db.User.findAll()
    res.render('admin/users', { mess: ' QUẢN LÝ USER', username: req.username, data })
})
router.post('/users', verifyToken, (req, res) => {
    res.render('admin/home')
})
router.put('/users/:id', verifyToken, (req, res) => {
    res.render('admin/home')
})
router.delete('/users/:id', verifyToken, (req, res) => {
    res.render('admin/home')
})


router.get('/cost', verifyToken, async (req, res) => {
    const data = await db.Cost.findAll()
    res.render('admin/cost', { mess: ' QUẢN LÝ GIÁ GIAO HÀNG', username: req.username, data })
})
router.post('/cost', verifyToken, (req, res) => {
    res.render('admin/home')
})
router.put('/cost/:id', verifyToken, (req, res) => {
    res.render('admin/home')
})
router.delete('/cost/:id', verifyToken, (req, res) => {
    res.render('admin/home')
})

router.get('/createcost', verifyToken, (req, res) => {
    res.render('admin/createcost')
})
router.get('/createuser', verifyToken, (req, res) => {
    res.render('admin/createuser')
})
router.post('/createuser', verifyToken, async (req, res) => {
    const listFee = await db.Cost.findAll()
    res.render('admin/createuser', { data: listFee })
})
router.get('/tracking', verifyToken, (req, res) => {
    res.render('admin/home')
})
router.post('/tracking', verifyToken, (req, res) => {
    res.render('admin/home')
})


module.exports = router