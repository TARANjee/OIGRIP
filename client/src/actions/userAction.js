import axios from 'axios'

export const registerUserAction = (user) => async dispatch => {

    dispatch({ type: 'USER_REQUEST' })

    try {
        const response = await axios.post('/api/users/register', user)
        console.log(response)
        dispatch({ type: 'USER_SUCCESS', payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
    } catch (error) {
        dispatch({ type: 'USER_FAILED', payload: error })
    }
}
export const loginUserAction = (user) => async dispatch => {

    dispatch({ type: 'USER_REQUEST' })

    try {
        const response = await axios.post('/api/users/login', user)
        console.log(response)
        dispatch({ type: 'USER_SUCCESS', payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
    } catch (error) {
        dispatch({ type: 'USER_FAILED', payload: error })
    }
}
export const logoutUserAction = () => async dispatch => {

    dispatch({ type: 'USER_LOGOUT_SUCCESS' })
    localStorage.removeItem('currentUser')
}