const mongoose = require('mongoose')

const otpSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    code:{
        type:String,
        required: true,
    },
    expireIn:{
        type:Number  
    }
},{timestamps:true })

const otpModel = mongoose.model('otp', otpSchema,'otp')

module.exports = otpModel