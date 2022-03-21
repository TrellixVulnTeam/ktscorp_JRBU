
const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 8990;
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const adminRouter = require('./routes/adminRouter')

// var mysql = require("mysql2");
// var db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'kkclisfs1D@@',
//     database: 'devKTS'
// })

// db.connect()

// const cfgVE = require("./config/viewEngine");
const initWebRts = require("./routes/web-router");
const { rootCertificates } = require("tls");
// test Connection
// const connectDB = require("./config/connectDB");
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "src/mysrc/views");


// cfgVE(app);1
initWebRts(app);
app.use('/admin', adminRouter)
// connectDB();

// sample
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

