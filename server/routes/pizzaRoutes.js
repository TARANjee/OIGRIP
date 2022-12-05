const express =require('express');
const { getAllpizzas } = require('../controllers/pizzasController');
const router =express.Router()

router.get('/getAllPizzas' ,getAllpizzas )

module.exports = router