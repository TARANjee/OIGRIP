require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const pizzasRoute = require('./routes/pizzaRoutes')
const userRoute = require('./routes/userRoute')

//express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
// routes

app.use('/api/pizzas',pizzasRoute );
app.use('/api/users',userRoute );

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


