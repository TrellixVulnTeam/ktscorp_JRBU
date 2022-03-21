
const db = require("../models/index");
const ktsServices = require("../services/ktsServices")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const req = require("express/lib/request");


let uGetDashBoard = async (req, res) => {
    try {
        userData = await ktsServices.getUserByUserName(req.username);
        if (!userData)
            res.redirect('/login')
        res.render("user/index", { username: req.username });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}
let uGetLogout = (req, res) => {
    res.clearCookie("token");
    res.redirect('/login')
}
let uPostDashBoard = async (req, res) => {
    const username = req.body.username;
    let password = req.body.password || 'ktsaaksjdkaljd~~!@#!'
    if (!username) {
        res.render('login', { mess: 'Đéo biết thằng nào, ông nhập tử tế hộ tôi cái, chưa có thì ấn vào cái nút đăng ký bên dưới nhá' });
    } else {
        const user = await ktsServices.getUserByUserName(username);
        if (user) {
            let checkPass = await bcrypt.compare(password, user.passWord);
            if (checkPass) {
                let token = jwt.sign(username, process.env.KTS_JWT_KEY)
                res.cookie('token', token, { maxAge: 7200000 })
                const adminRole = ['R2', 'R1']
                if (adminRole.includes(user.roleID)) {
                    return res.redirect('/admin')
                }
                res.redirect('/user')
            } else {
                //nhap sai pass
                res.render('login', { mess: 'Sai pass' });
            }

        } else {
            // res.render('login', { mess: 'Anh ơi nhập sai usernam/pass rồi, lại phát nhá' });
            res.render('login', { mess: 'Sai username' });
        }
    }
}

// }
// const userName = req.body.userName;
// const pwd = req.body.pwd;

// const user = await Project.findOne({ where: { userName: 'My Title' } });
// if (user === null) {
//     console.log('Not found!');
// } else {
//     console.log(user instanceof Project); // true
//     console.log(user.userName); // 'My Title'
// }

// res.render("user/index");
// } 
let uGetTracking = (req, res) => {
    res.render('user/tracking', { username: req.username })
}
let uPostTracking = (req, res) => {
    //test billCode: SNP223754855
    const { trackingnumber } = req.body

    // var request = require('request');
    // var options = {
    //     'method': 'POST',
    //     'url': 'https://pos.pages.fm/api/v1/snappy/users/login/password',
    //     'headers': {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "email": "jackforez@gmail.com",
    //         "password": process.env.KTS_SNAPPY_PASSWORD
    //     })

    // };
    // request(options, function (error, response) {
    //     if (error) throw new Error(error);
    //     console.log(response.body.access_token);
    // });
    var url = 'https://pos.pages.fm/api/v1/snappy/track?ids=' + trackingnumber;
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': url,
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        const data = JSON.parse(response.body)
        res.render('user/tracking', { username: req.username, trackingnumber, data: data.trackings })
    });
}
let uGetStores = async (req, res) => {
    const uid = await ktsServices.getUserByUserName(req.username)
    const stores = await ktsServices.stores(uid.id)
    res.render('user/stores', { username: req.username, data: stores.data })
}
let uGetBills = async (req, res) => {
    const uid = await ktsServices.getUserByUserName(req.username)
    const bills = await ktsServices.bills(uid.id)
    res.render('user/bills', { username: req.username, data: bills.data })
}
let getCreateUser = (req, res) => {
    res.render("user/ucreateuser")
}
let uGetCreateBill = (req, res) => {
    res.render("user/ucreatebill", { username: req.username });
}
let uPostCreateBill = async (req, res) => {
    const orderdata = req.body
    const orderNumber = 'KTS' + Math.floor(Math.random() * (1000000 + 1))
    const username = req.username
    const data = { orderdata, orderNumber, username }
    try {
        await ktsServices.createBill(data);
        res.render("user/ucreatebill", { mess: `Đơn hàng được tạo thành công với mã vận đơn: ${orderNumber}`, username, data: orderdata })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
    // var request = require('request');
    // let myKey = 'kts'
    // var options = {
    //     'method': 'POST',
    //     'url': 'https://pos.pages.fm/api/v1/snappy/users/login/password',
    //     'headers': {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "email": "jackforez@gmail.com",
    //         "password": process.env.KTS_SNAPPY_PASSWORD
    //     })

    // };
    // request(options, function (error, response) {
    //     if (error) throw new Error(error);
    //     const data = JSON.parse(response.body)
    //     myKey = JSON.parse(response.body).access_token
    //     console.log(data);
    // });

}
let uGetCreatStore = (req, res) => {
    res.render("user/stores", { mess: 'THÊM MỚI ', username: req.username })
}
let uPostCreatStore = async (req, res) => {
    const data = {
        username: req.username,
        storename: req.body.storename,
        storeaddress: req.body.storeaddress
    }
    try {
        await ktsServices.createStore(data);
        res.render("user/stores", { mess: 'THÊM MỚI ', status: 'Thành công' })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}
module.exports = {
    uPostDashBoard: uPostDashBoard,
    uGetCreateBill: uGetCreateBill,
    uPostCreateBill: uPostCreateBill,
    uGetDashBoard: uGetDashBoard,
    getCreateUser: getCreateUser,
    uGetBills: uGetBills,
    uGetStores: uGetStores,
    uGetTracking: uGetTracking,
    uGetLogout, uGetCreatStore, uPostCreatStore, uPostTracking
}

