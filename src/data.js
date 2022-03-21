const mydata = [
    { "status": 200, "error": false, "message": "OK", "data": [{ "MA_KIEN": "PKE154751777", "NGAY_NHAP": "03/01/2022 20:47", "TIME_TRANGTHAI": "06/01/2022 22:00", "BUUCUC_NHAN": "HUB Đồng Hỷ - Thái Nguyên - Thái Nguyên", "BUUCUC_DEN": "HUB Lê Chân - Hải Phòng - Hải Phòng", "TRONG_LUONG": 2000, "DICH_VU": "Chuyển Phát Đường Bộ", "GHI_CHU": "Phát thành công", "MA_TRANGTHAI": 5, "TRACKINGS": [{ "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "06/01/2022 21:27", "ORDER_NOTE": "Giao thành công", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "Người nhận: Thu Phan (Người nhận: Thu Phan)", "lat": "-1", "lng": "-1" }, { "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "06/01/2022 08:49", "ORDER_NOTE": "Giao hàng", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "NVBH Phạm Thị  Hoàn - 0906050427 - HUB Lê Chân, Hải Phòng - Q.Lê Chân, TP.Hải Phòng", "lat": "-1", "lng": "-1" }, { "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "06/01/2022 08:49", "ORDER_NOTE": "Vận chuyển", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "HUB Lê Chân, Hải Phòng - Q.Lê Chân, TP.Hải Phòng - 02256257979", "lat": "-1", "lng": "-1" }, { "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "04/01/2022 16:10", "ORDER_NOTE": "Đang vận chuyển", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "Bưu cục Trung Tâm Khai Thác 1 - Q.Bắc Từ Liêm, TP.Hà Nội - 0869578091", "lat": "-1", "lng": "-1" }, { "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "04/01/2022 16:10", "ORDER_NOTE": "Đã kết nối", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "Từ Q.Bắc Từ Liêm, TP.Hà Nội đến Q.Lê Chân, TP.Hải Phòng", "lat": "-1", "lng": "-1" }, { "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "03/01/2022 20:55", "ORDER_NOTE": "Đang kết nối", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "HUB Đồng Hỷ, Thái Nguyên - H.Đồng Hỷ, T.Thái Nguyên - 0982456077", "lat": "-1", "lng": "-1" }, { "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "02/01/2022 17:40", "ORDER_NOTE": "Đã nhận hàng", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "NVBH Đỗ Thành Nam - 0862316080", "lat": "-1", "lng": "-1" }, { "ORDER_REFERENCE": "", "ORDER_STATUS": 0, "ORDER_STATUSDATE": "02/01/2022 17:40", "ORDER_NOTE": "Tạo đơn hàng", "MAPG_KETNOI": "", "TRA_CUU": "", "TRANG_CHU": "", "BUU_CUC": "H.Đồng Hỷ, T.Thái Nguyên", "lat": "-1", "lng": "-1" }] }] }
]

module.exports = mydata

// < div class="container mt-5" >
//         <% data.forEach(function (i) { %>
//             <div class="col-md-12">
//                 <div class="row form-group">
//                     <div class="col-md-2 col-3 text-md-center text-left pt-2">
//                 tiem
//                     </div>
//                     <div class="col-md-10 col-md-9 pr-4 pb-4">
//                         <div class="card">
//                             <div class="card-body box box-left">
//                                 <%-i%>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <% });%>
//     </div >

// const datafromSNAPPY =
// {
//     success: true,
//     trackings: [
//         {
//             returner_id: null,
//             shop_id: null,
//             receiver_district_id: '70501',
//             updated_at: '2021-08-05T15:58:27',
//             receiver_province_id: '705',
//             delivered_at: '2021-08-04T11:46:37',
//             intercity_bag_id: null,
//             customer_tracking_id: '12869.8S8NUZMRQV9O',
//             delivery_times: 0,
//             short_id: 2375485,
//             printting_count: 0,
//             full_pos_id: null,
//             current_status_en: 'delivered',
//             insurance_cost: 0,
//             returned_at: null,
//             is_lost: false,
//             business_address_id: '961ebf46-8840-4131-ab9a-9e08a6e53575',
//             creator_id: 'f6b4710d-d06e-4b6e-8334-aaccf71dc336',
//             id: 'SNP223754855',
//             part_delivery_cost: 0,
//             print_data: [Object],
//             cod_cost: 0,
//             picker_id: '552d93ec-af0b-4b02-871b-4f757e7121ab',
//             current_status: 'Giao thành công',
//             receiver_commune_id: '7050103',
//             first_import_warehouse_at: '2021-07-28T15:46:24',
//             return_cost: 0,
//             business_id: 19765,
//             picked_up_at: '2021-07-28T13:05:01',
//             status_color: '#639026',
//             shipper_id: null,
//             is_return: false,
//             balance_adjustment: 1365000,
//             addition_services: [],
//             inserted_at: '2021-07-25T17:40:11',
//             tags: [],
//             prepaid: 0,
//             last_update: [Object],
//             has_partner: true,
//             sny_warehouse_id: null,
//             updates: [Array],
//             shipping_cost: 25000,
//             to: [Object],
//             total_cost: 25000
//         }
//     ]
// }

// var request = require('request');
// var options = {};
// var url = '';
// var billCode = req.query.trackingNumber;
// // VIETTEL
// options = {
//     'method': 'POST',
//     'url': 'https://partner.viettelpost.vn/v2/user/Login',
//     'headers': {
//         'Content-Type': 'application/json',
//         'Cookie': 'SERVERID=C'
//     },
//     body: JSON.stringify({
//         "USERNAME": "jackforez@gmail.com",
//         "PASSWORD": "kkclisfs1D@@"
//     })

// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     let mydata = JSON.parse(response.body);
//     console.log("đata from Viettel Post")
//     console.log(mydata.data);
//     res.render("tracking", { data: [mydata.data.userId, 123] });
// });

// SNAPPY
// test billCode: SNP223754855
// console.log();
// options = {
//     'method': 'GET',
//     'url': 'https://pos.pages.fm/api/v1/snappy/track?ids=' + billCode,
//     'headers': {
//     }
// };
// request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log("data from SNAPPY")
//     console.log(JSON.parse(response.body));
// });


