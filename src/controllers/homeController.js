
const db = require("../models/index");
// var mysql = require('mysql');
// const connectDB = require("../config/connectDB");
const mydata = require("../data");
const ktsServices = require("../services/ktsServices");
const jwt = require('jsonwebtoken')
// let getHomePage = async (req, res) => {
//     // try {
//     //     let data = await db.User.findAll();
//     //     console.log(data[0].id);
//     //     res.render("trang-chu.ejs", {
//     //         fName: data[0].firstName,
//     //         lName: data[0].lastName
//     //     });
//     // } catch (error) {
//     //     console.log(error);
//     // }
//     console.log("testDB");
//     res.send("vkl");

// };
let getHomePage = (req, res) => {
    res.render("trang-chu");
}
let getLoginPage = async (req, res) => {
    let token = req.cookies.token;
    if (!token)
        return res.render('login')
    const username = jwt.verify(token, process.env.KTS_JWT_KEY);

    if (!username) {
        return res.render('login')
    }
    try {
        const user = await ktsServices.getUserByUserName(username)
        if (!user) {
            return res.render('login', { mess: `${username} không tồn tại` })
        }
        token = jwt.sign(username, process.env.KTS_JWT_KEY)
        res.cookie('token', token, { maxAge: 7200000 })
        res.redirect('/user')
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }

}
let getRegister = (req, res) => {
    res.render("register");
}
let postRegister = async (req, res) => {
    let result = await ktsServices.createUser(req.body);
    if (result.success) {
        res.render("register", { mess: 'Đăng ký thành công!' });
    } else {
        res.render("register", { mess: result.message });
    }

}
let getTestDB = (req, res) => {

    // res.render("login");
    connectDB();
}
let getAbout = (req, res) => {
    res.render("about");
};
let getServices = (req, res) => {
    res.render("services");
};
let getBlog = (req, res) => {
    res.render("blog");
};
let getBlogDetails = (req, res) => {
    res.render("blogdetails");
};
let getBlogElement = (req, res) => {
    res.render("blogelement");
};
let getContact = (req, res) => {
    res.render("contact");
};
let getTracking = (req, res) => {
    //viettel Form
    let dt = JSON.stringify(mydata[0]);
    res.render("trang-chu", { data: { billNumber: '1234', status: 'Thành công' } })
    // res.render("trang-chu")
    // console.log(req.query.trackingNumber);
};

module.exports = {
    getHomePage: getHomePage,
    getLoginPage: getLoginPage,
    getTestDB: getTestDB,
    getAbout: getAbout,
    getServices: getServices,
    getBlog: getBlog,
    getBlogDetails: getBlogDetails,
    getBlogElement: getBlogElement,
    getContact: getContact,
    getTracking: getTracking,
    getRegister: getRegister,
    postRegister: postRegister
}