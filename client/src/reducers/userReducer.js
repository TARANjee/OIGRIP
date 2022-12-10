export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case 'USER_REQUEST': return {
            loading: true
        }
        case 'USER_SUCCESS': return {
            loading: false,
            success: true,
            currentUser: action.payload
        }
        case 'USER_FAILED': return {
            loading: false,
            error: action.payload
        }
        case 'USER_LOGOUT_SUCCESS':
            return {
                loading: false,
                success: true,
                currentUser: null
            }
        default: return state

    }
}
export const userLocation = (state = {location:[]}, action) => {

    switch (action.type) {
        case 'USER_LOCATION_REQUEST': return {
            loading: true
        }
        case 'USER_LOCATION_SUCCESS': return {
            loading: false,
            success: true,
            
        }
        case 'USER_LOCATION_FAILED': return {
            loading: false,
            error: action.payload
        }
        
        default: return state

    }
}
