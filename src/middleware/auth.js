const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // const authHeader = req.header('Authorization')
    // const token1 = authHeader && authHeader.split(' ')[1]
    // console.log(`day la noi dung header: ${authHeader, token1}`)

    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.KTS_JWT_KEY);
        req.username = user;
        next();
    } catch (err) {
        return res.redirect("login");
    }
};

module.exports = verifyToken