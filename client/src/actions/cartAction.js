export const addToCart = (pizza, quantity, variant) => async (dispatch, getState) => {


    let cartItem = {
        name: pizza.name,
        _id: pizza.name,
        image: pizza.image,
        prices: pizza.prices,
        description: pizza.description,
        price: pizza.prices[0][variant] * quantity,
        variant,
        quantity
    }

    if (cartItem.quantity > 10) {
        alert('You can only add up to 10 pizzas')

    }
    else {
        if (cartItem.quantity <= 0)
            dispatch({ type: 'REMOVE_FROM_CART', payload: pizza })
        else
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })

    }
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const removeFromCart = (pizza, variant) => async (dispatch, getState) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: pizza })

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}