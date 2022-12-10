
const User = require('../models/userModel')

const registerUser = async (req, res) => {
    const { name, password, email } = req.body


    try {
        const newUser = await User({ name, password, email })
        newUser.save()
        res.send(newUser).status(200)
    } catch (error) {
        res.status(400).json({ message: `Sorry, No User Found :${error}` })
    }
}
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.find({ email, password })
        console.log("-->", user)
        if (user.length > 0) {
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(currentUser).status(200)
        }
        else {
            return res.status(400).json({ message: ` User Login Failed` })
        }
    } catch (error) {
        res.status(400).json({ message: ` User Login ${error} ` })
    }
}

module.exports = {
    registerUser,
    loginUser
}