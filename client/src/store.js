import { combineReducers } from 'redux'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzasReducer } from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer'
import { userReducer } from './reducers/userReducer'

const finalReducer = combineReducers({
    getAllPizzasReducer,
    cartReducer,
    userReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: {
        cartItems
    },
    userReducer:{
        currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store