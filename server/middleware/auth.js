const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) {
            res.send("Authorization failed token not found.").status(400)
        }
        jwt.verify(token, process.env.ACTIVATION_TOKEN, (err, user) => {
            if (err) {
                res.send("Authorization verification failed .").status(400)
            }

            req.user = user
            next()
        })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = auth