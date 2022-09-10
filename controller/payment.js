var crypto = require("crypto");

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

async function verifyPayment(req, res) {
  // try {
  //   const { response } = req.body;

  //   // console.log(response);

  //   const body =
  //     response.razorpay_order_id + "|" + response.razorpay_payment_id;
  //   const expectedSignature = crypto
  //     .createHmac("sha256", "803IhqE0h11s8eZBSWwpUKZS")
  //     .update(body.toString())
  //     .digest("hex");
  //   // generated_signature = hmac_sha256(response.razorpay_order_id + "|" + response.razorpay_payment_id, secret);

  //   if (expectedSignature === response.razorpay_signature) {
  //     // console.log("payment is successful");
  //     res.status(200).send({
  //       status: true,
  //     });
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
}

const payment = {
  AddmoneyByrozarpay,
  verifyPayment
};

module.exports = payment;
