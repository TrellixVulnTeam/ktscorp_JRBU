const express = require("express");
const homeController = require("../controllers/homeController");
let rt = express.Router();

let initWebRts = (app) => {
    // GET-USER
    rt.get('/', homeController.getHomePage);

    rt.get('/ulogin', homeController.getLoginPage);
    rt.get('/about', homeController.getAbout);
    rt.get('/services', homeController.getServices);
    rt.get('/blog', homeController.getBlog);
    rt.get('/blog-details', homeController.getBlogDetails);
    rt.get('/blog-element', homeController.getBlogElement);
    rt.get('/contact', homeController.getContact);

    rt.get('/getTracking', homeController.getTracking);
    //ADMIN
    rt.get('/testdb', homeController.getHomePage);

    return app.use("/", rt);

}

module.exports = initWebRts;