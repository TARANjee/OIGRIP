const express = require('express');
const { registerUser, loginUser,forgot,resetPassword,activation,access } = require('../controllers/usersController');
const auth = require('../middleware/auth')
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/forgot',forgot )
router.post('/activation',activation )
router.post('/reset',auth, resetPassword )
router.get('/access',access )

module.exports = router