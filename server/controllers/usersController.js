const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const sendMail = require('../helpers/sendMail')
const createToken = require('../helpers/createToken')

// const createToken =()=> {
//     return jwt.sign(payload, process.env.SECRET, { expiresIn: '3d' })
// }


const registerUser = async (req, res) => {

    try {
        const { name, password, email } = req.body

        // validation
        if (!email || !password || !name) {
            throw Error('All field must be filled')
        }
        if (!validator.isEmail(email)) {
            throw Error('Email is not valid')
        }
        if (!validator.isStrongPassword(password)) {
            throw Error('Password not strong enough')
        }

        const exists = await User.findOne({ email })

        if (exists) {
            throw Error('Email already in use')
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)


        // create a token
        const newUser = { name, email, password: hash }
        const activation_token = createToken.activation(newUser)


        //send email
        const url = `http://192.168.1.205:3000/activation?reference=${activation_token}`;
        sendMail.sendEmailRegister(email, url, "Verify your email");

        res.status(200).json({ msg: "Welcome ! please check your email." })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.login(email, password)

        // create a token
        const token = createToken.refresh({ id: user._id })
        const name = user.name

        res.status(200).json({ user, msg: "Signing success" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const resetPassword = async (req, res) => {

    try {
        const { password } = req.body

        if (!password) {
            throw Error('Password Field must be filled')
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        await User.findOneAndUpdate({ _id: req.user.id }, { password: hash })


        // success
        res.status(200).json({ msg: "Password was updated successfully." });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }


}
const activation = async (req, res) => {
    try {
        // get token
        const { activation_token } = req.body;

        // verify token
        const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN);
        console.log(user)
        const { name, email, password } = user;

        // check user
        const check = await User.findOne({ email });
        if (check)
            return res
                .status(400)
                .json({ msg: "This email is already registered." });

        // add user
        const newUser = new User({
            name,
            email,
            password,
            verified: true
        });
        await newUser.save();

        // activation success
        res.status(200).json({ msg: "Your account has been activated, you can now sign in." });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}
const forgot = async (req, res) => {
    try {
        const { email } = req.body

        if (!email) {
            throw Error('Email Field must be filled')
        }
        if (!validator.isEmail(email)) {
            throw Error('Email is not valid')
        }
        const user = await User.findOne({ email })

        if (!user) {
            res.json({ msg: "No user found email." }).status(200)
        }
        console.log(user)
        const token = createToken.activation({ id: user._id })
        console.log("token")
        const url = `http://192.168.1.205:3000/reset-password?token=${token}`;
        const name = user.name;
        sendMail.sendEmailReset(email, url, "Reset your password", name);

        // success
        res.status(500).json({ msg: "Please check your email." });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }

}
const access = async (req, res) => {
    try {
        const rf_token = req.cookies._apprftoken

        if (!rf_token) {
            throw Error('Please sign in')
        }

        jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, user) => {
            if (err) throw Error('Please sign in again')

            const ac_token = createToken.access({ id: user.id })

            res.status(200).json({ ac_token })
        })

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }

}


module.exports = {
    registerUser,
    loginUser,
    forgot,
    resetPassword,
    activation,
    access
}