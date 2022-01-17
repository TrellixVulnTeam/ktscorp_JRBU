
const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 2000;
const app = express();
// const cfgVE = require("./config/viewEngine");
const initWebRts = require("./routes/web-router");
// test Connection
// const connectDB = require("./config/connectDB"); 
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "src/mysrc/views");


// cfgVE(app);
initWebRts(app);

// connectDB();

// sample

let mydata = [
    {}, {}, {}, {}, {}
];

//
app.listen(port, () => {
    console.log('Server is runing on the port: ', port);
    console.log("===========================");
});

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://partner.viettelpost.vn/v2/user/Login",
//     "method": "POST",
//     "headers": {
//         "Content-Type": "application/json",
//     },
//     "data": {
//         "USERNAME": "0927687589",
//         "PASSWORD": "Kenh14.vn"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

