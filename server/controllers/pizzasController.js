
const Pizza = require('../models/pizzaModel')

const getAllpizzas = async (req, res) => {

    try {
        const pizzas = await Pizza.find({})
        res.status(200).json(pizzas)
    } catch (error) {
        res.status(400).json({ message: `Sorry, No Pizzas Found :${error}` })
    }
}

module.exports = {
    getAllpizzas
}