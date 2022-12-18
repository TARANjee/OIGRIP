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
            dispatch({ type: 'USER_ACTIVATION', payload: data })
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
            dispatch({ type: 'LOGIN', payload: data.user })
            localStorage.setItem('currentUser', JSON.stringify(data.user))
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
export const ActivationAction = (activation_token) => async dispatch => {


    try {
        const response = await fetch(`/api/users/activation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ activation_token })

        })
        console.log(response)
        const data = await response.json()
        if (response.ok) {
            // localStorage.setItem('currentUser', JSON.stringify(data))
            dispatch({ type: 'USER_ACTIVATION', payload: data })
        }

    } catch (error) {
        dispatch({ type: 'USER_FAILED', payload: error })
    }
}
export const sendForgotEmailAction = ({ email }) => async dispatch => {

    try {
        const response = await fetch(`/api/users/forgot`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })

        const data = await response.json()
        console.log(data.msg)

        dispatch({ type: 'USER_FORGOT', payload: data })


    } catch (error) {
        dispatch({ type: 'USER_FAILED', payload: error })
    }

}
export const forgotPasswordAction = ({ password, a_token }) => async dispatch => {

    try {
        const response = await fetch(`/api/users/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': a_token
            },
            body: JSON.stringify({ password })
        })
      
        const data = await response.json()
        

        dispatch({ type: 'USER_RESET', payload: data })

    } catch (error) {
        dispatch({ type: 'USER_FAILED', payload: error })
    }

}