const express = require("express");
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const verifyToken = require('../middleware/auth')
let rt = express.Router();

let initWebRts = (app) => {
    // WEB
    rt.get('/', homeController.getHomePage);
    // rt.get('/ulogin', homeController.getLoginPage);
    rt.get('/about', homeController.getAbout);
    rt.get('/services', homeController.getServices);
    rt.get('/blog', homeController.getBlog);
    rt.get('/blog-details', homeController.getBlogDetails);
    rt.get('/blog-element', homeController.getBlogElement);
    rt.get('/contact', homeController.getContact);
    rt.get('/getTracking', homeController.getTracking);
    rt.get('/login', homeController.getLoginPage);
    rt.get('/register', homeController.getRegister)
    rt.post('/register', homeController.postRegister)
    //USER
    rt.get('/user', verifyToken, userController.uGetDashBoard)
    // rt.post("/user/dangnhap", userController.uPostDashBoard);
    rt.get("/user/dashboard", verifyToken, userController.uGetDashBoard)
    rt.post("/user/login", userController.uPostDashBoard)
    rt.get('/user/createuser', userController.getCreateUser)
    rt.get('/user/createbill', verifyToken, userController.uGetCreateBill)
    rt.post('/user/createbill', verifyToken, userController.uPostCreateBill)
    rt.get('/user/createstore', verifyToken, userController.uGetCreatStore)
    rt.post('/user/createstore', verifyToken, userController.uPostCreatStore)
    rt.get('/user/bills', verifyToken, userController.uGetBills)
    rt.get('/user/stores', verifyToken, userController.uGetStores)
    rt.get('/user/tracking', verifyToken, userController.uGetTracking)
    rt.post('/user/tracking', verifyToken, userController.uPostTracking)
    rt.get('/user/logout', verifyToken, userController.uGetLogout)
    //ADMIN
    rt.get('/testdb', homeController.getTestDB);

    return app.use("/", rt);

}

module.exports = initWebRts;