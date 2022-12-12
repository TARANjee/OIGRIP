const Razorpay = require('razorpay')
const crypto = require('crypto')
const { Payment } = require('../models/paymentModel')

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_KEY_SECRET,
});

const checkout = async (req, res) => {
    var options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
    };
    const order = await instance.orders.create(options);

    res.status(200).json({
        success: true,
        order
    })
}
const paymentVerfication = async (req, res) => {

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body

    let body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        //Database save
        await Payment.create({ razorpay_payment_id, razorpay_order_id, razorpay_signature })


        res.redirect(`/paymentsuccess?reference=${razorpay_payment_id}`)
    } else {
        res.status(400).json({
            success: false,
        })
    }


}


module.exports = { checkout, paymentVerfication }