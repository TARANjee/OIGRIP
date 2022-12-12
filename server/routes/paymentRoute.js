const express = require('express')
const router = express.Router()
const { checkout, paymentVerfication } = require('../controllers/checkoutController');

router.post("/checkout", checkout)
router.post("/paymentverification", paymentVerfication)
router.get("/getkey", (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
})

module.exports = router