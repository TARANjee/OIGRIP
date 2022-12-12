require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const pizzasRoute = require('./routes/pizzaRoutes')
const userRoute = require('./routes/userRoute')
const paymentRoute = require('./routes/paymentRoute')
const Razorpay = require('razorpay')
//express app
const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
// routes

app.use('/api/pizzas', pizzasRoute);
app.use('/api/users', userRoute);
app.use('/api/payment', paymentRoute);



// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connect to DB & Listening on port 5000!!');
        });

    })
    .catch((error) => {
        console.log(error)
    })

// razorpay

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_KEY_SECRET,
});

module.exports ={ instance}

