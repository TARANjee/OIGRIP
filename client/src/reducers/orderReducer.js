export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            const alreadyExists = state.cartItems.filter(item => item._id === action.payload._id)
            console.log(alreadyExists)
            if (alreadyExists.length !== 0) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        case 'REMOVE_FROM_CART':

            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id)
            }

        default:
            return state
    }
}