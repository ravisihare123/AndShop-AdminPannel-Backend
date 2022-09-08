
async function AddmoneyByrozarpay(req, res) {
  try {
    // console.log(req.body)
    // const { addmoney } = req.body;
    var instance = new Razorpay({
      key_id: "rzp_test_3bIvCw7cx15BMe",
      key_secret: "803IhqE0h11s8eZBSWwpUKZS",
    });

    // console.log(Math.ceil(parseFloat(addmoney) * 100));
    // var options = {
    //   amount: Math.ceil(parseFloat(addmoney) * 100), // amount in the smallest currency unit
    //   currency: "INR",
    //   // receipt: "order_rcptid_11"
    // };

    await instance.orders.create(options, function (err, order) {
      console.log(order);
      res.json({
        status: true,
        order: order,
      });
        // console.log(order);
    });
  } catch (err) {
    return res.json({
      status: false,
      msg: err.message,
    });
  }
}

// async function VerifyPayment(req, res) {
//   try {
//     // console.log(req.body)
//     const { response } = req.body;

//     const body =
//       response.razorpay_order_id + "|" + response.razorpay_payment_id;
//     var expectedSignature = crypto
//       .createHmac("sha256", "803IhqE0h11s8eZBSWwpUKZS")
//       .update(body.toString())
//       .digest("hex");
//     // generated_signature = hmac_sha256(response.razorpay_order_id + "|" + response.razorpay_payment_id, secret);

//     if (expectedSignature == response.razorpay_signature) {
//       // console.log("payment is successful");
//       // console.log(req.body)

//       const { uid, addmoney, type } = req.body;

//       const txn_id = crypto.randomBytes(3).toString("hex");

//       if (type == "credit") {
//         var credit = addmoney;
//         var debit = 0;
//       } else {
//         var debit = addmoney;
//         var credit = 0;
//       }

//       var data = {
//         uid: uid,
//         txn_id: txn_id + new Date().getTime(),
//         payment_mode: "online",
//         note: 0,
//         credit: credit,
//         debit: debit,
//         createAt: new Date(),
//         createBy: uid,
//       };

//       var insert = await dbConfig("passbook").insert(data);

//       const getData = await dbConfig("user_wallet").where("uid", uid).first();

//       if (getData) {
//         if (type == "credit") {
//           var amt = getData.balance;
//           var closing_bal = amt + parseInt(addmoney);
//         } else {
//           var amt = getData.balance;
//           var closing_bal = amt - parseInt(addmoney);
//         }

//         var wallet_data = {
//           balance: closing_bal,
//           last_txid: txn_id + new Date().getTime(),
//           updateAt: new Date(),
//           updateBy: uid,
//         };

//         await dbConfig("user_wallet").where("uid", uid).update(wallet_data);
//         await dbConfig("logs").insert({
//           event_Id: uid,
//           event_name: "user_wallet",
//           type: "Add Money",
//           createAt: new Date(),
//           createBy: uid,
//         });
//       } else {
//         if (type == "credit") {
//           var closing_bal = 0 + parseInt(addmoney);
//         } else {
//           var closing_bal = 0 - parseInt(addmoney);
//         }
//       }

//       return res.json({
//         status: true,
//         // balance: getBalance.balance ? getBalance.balance : 0,
//         msg: "payment is successful",
//       });
//     } else {
//       return res.json({
//         status: false,
//         // balance: getBalance.balance ? getBalance.balance : 0,
//         msg: "payment NOT  successful",
//       });
//     }
//   } catch (err) {
//     return res.json({
//       status: false,
//       msg: err.message,
//     });
//   }
// }

const payment = {
    AddmoneyByrozarpay
}

module.exports= payment;