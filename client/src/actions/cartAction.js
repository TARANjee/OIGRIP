export const addToCart = (pizza, quantity, variant) => async (dispatch,getState )=> {


    let cartItem = {
        name: pizza.name,
        _id: pizza.name,
        image: pizza.image,
        prices: pizza.prices,
        description:pizza.description,
        price: pizza.prices[0][variant] * quantity,
        variant,
        quantity
    }

    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))

} 