export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case 'USER_REQUEST': return {
            loading: true,     
        }
        case 'LOGIN': return {
            loading: false,
            currentUser: action.payload
        }
        case 'LOGOUT': return {
            currentUser: null
        }
        case 'USER_FAILED': return {
            loading: false,
            error: action.payload
        }
        case 'USER_FORGOT': return {
            loading: false,
            msg: action.payload
        }
        case 'USER_ACTIVATION': return {
            loading: false,
            msg: action.payload
        }
        case 'USER_RESET': return {
            loading: false,
            msg: action.payload
        }
        default: return state

    }
}
