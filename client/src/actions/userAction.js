import axios from 'axios'

export const registerUserAction = ({ name, email, password }) => async dispatch => {
    console.log({ name, email, password })
    dispatch({ type: 'USER_REQUEST' })

    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, name })
        })
        const data = await response.json()
        console.log(data)
        if (!response.ok) {
            dispatch({ type: 'USER_FAILED', payload: data })
        }
        if (response.ok) {
            dispatch({ type: 'LOGIN', payload: data })
            localStorage.setItem('currentUser', JSON.stringify(data))
        }

    } catch (error) {
        dispatch({ type: 'USER_FAILED', payload: error })
    }
}
export const loginUserAction = ({ email, password }) => async dispatch => {

    dispatch({ type: 'USER_REQUEST' })

    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        console.log(data)
        if (!response.ok) {
            dispatch({ type: 'USER_FAILED', payload: data })
        }
        if (response.ok) {
            dispatch({ type: 'LOGIN', payload: data })
            localStorage.setItem('currentUser', JSON.stringify(data))
        }
    } catch (error) {
        dispatch({ type: 'USER_FAILED', payload: error })
    }
}
export const logoutUserAction = () => async dispatch => {

    dispatch({ type: 'LOGOUT' })
    localStorage.removeItem('currentUser')
}
export const UserOrderAction = (user) => async dispatch => {

    dispatch({ type: 'USER_ORDER', payload: user })

    try {
        const response = await axios.patch('/api/users/update', user)
        console.log(response)
        // dispatch({ type: 'USER_ORDER_SUCCESS', payload: response.data })
        // localStorage.setItem('currentUser', JSON.stringify(response.data))
    } catch (error) {
        dispatch({ type: 'USER_ORDER_FAILED', payload: error })
    }
}