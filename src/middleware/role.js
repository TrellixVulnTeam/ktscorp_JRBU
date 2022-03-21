
const ktsServices = require('../services/ktsServices')

const isAdmin = (req, res, next) => {
    const username = req.username
    console.log(req.username)
    console.log(req.originalUrl)
};

module.exports = isAdmin
