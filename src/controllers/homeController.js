
const mydb = require("../models/index");


// let getHomePage = async (req, res) => {
//     try {
//         let data = await mydb.User.findAll();
//         // console.log(data[0].id);
//         res.render("trang-chu.ejs", {
//             fName: data[0].firstName,
//             lName: data[0].lastName
//         });
//     } catch (error) {
//         console.log(error);
//     }
//     // res.send("vkl");

// };
let getHomePage = (req, res) => {
    res.render("trang-chu");
}
let getLoginPage = (req, res) => {
    res.render("login");
}
let getTestDB = (req, res) => {
    res.render("login");
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
    console.log(req.query.trackingNumber);

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
    getTracking: getTracking
}