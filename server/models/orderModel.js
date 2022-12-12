const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    phoneNo:{
        type:Number,
        require,
    },
    address:{
        type:String,
        require,
    }
    
}, { timestamps: true })

const userModel = mongoose.model('order',orderSchema)

module.exports = userModel