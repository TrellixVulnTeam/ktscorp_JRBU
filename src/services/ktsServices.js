let db = require("../models/index");
let bcrypt = require("bcrypt");
const { promiseImpl } = require("ejs");
const salt = bcrypt.genSaltSync(10);

let getUserByUserName = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userdata = await db.User.findOne({
                where: { userName: data },
                raw: true,
                logging: false

            });
            if (userdata) {
                resolve(userdata);
            } else {
                resolve(null)
            }
        } catch (e) {
            reject(e);
        }
    })
}
// @ roleID  "R3":USER
let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {

        try {
            let user = await db.User.findOne({
                where: { userName: data.username }
            })
            if (user) {
                resolve({
                    success: false,
                    message: 'Username already taken'
                })
            } else {
                let hashPassword = await bcrypt.hashSync(data.password, salt);
                await db.User.create({
                    userName: data.username,
                    passWord: hashPassword,
                    email: data.email,
                    phoneNumber: data.phone,
                    roleID: "R3"
                });
                resolve({
                    success: true,
                    message: 'Done!'
                })
            }
        } catch (e) {
            reject(e)
        }
    });
}
let createStore = async (data) => {
    return new Promise(async (resolve, reject) => {

        try {
            let user = await db.User.findOne({
                where: { userName: data.username }
            })
            if (user) {
                await db.Store.create({
                    userName: data.storename,
                    address: data.storeaddress,
                    userID: user.id,
                });
                resolve({
                    success: true,
                    message: 'Thêm mới kho hàng thành công'
                })
            } else {
                resolve({
                    success: false,
                    message: 'Không biết ông này là ông nào!'
                })
            }
        } catch (e) {
            reject(e)
        }
    });
}

let stores = async (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let stores = await db.Store.findAll({
                where: { userID }
            })
            if (stores) {
                resolve({
                    success: true,
                    message: 'Tìm thấy ' + stores.length,
                    data: stores
                })
            } else {
                resolve({
                    success: false,
                    message: 'Không biết ông này là ông nào!'
                })
            }
        } catch (e) {
            reject(e)
        }
    });
}
let bills = async (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let bills = await db.Order.findAll({
                where: { userID }
            })
            if (bills) {
                resolve({
                    success: true,
                    message: 'Tìm thấy ' + bills.length,
                    data: bills
                })
            } else {
                resolve({
                    success: false,
                    message: 'Không biết ông này là ông nào!'
                })
            }
        } catch (e) {
            reject(e)
        }
    });
}

let createBill = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { userName: data.username }
            })
            if (user) {
                await db.Order.create({
                    ordernumber: data.orderNumber,
                    userid: user.id,
                    status: 'pendding',
                    receivername: data.orderdata.r_name,
                    receiveraddress: data.orderdata.raddress,
                    receiverphone: data.orderdata.rphone,
                    cod: data.orderdata.cod,
                    note: data.orderdata.note
                });
                resolve({
                    success: true,
                    message: 'Tạo mới vận đơn thành công'
                })
            } else {
                resolve({
                    success: false,
                    message: 'Không biết ông này là ông nào!'
                })
            }
        } catch (e) {
            reject(e)
        }
    });
}
module.exports = {
    createUser: createUser,
    getUserByUserName: getUserByUserName,
    createStore, stores, createBill, bills
}