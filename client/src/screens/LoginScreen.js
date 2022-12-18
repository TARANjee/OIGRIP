import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUserAction } from '../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer)

    const { error} = userState
    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {
            email,
            password
        }
        dispatch(loginUserAction(user))

    }

    return (
        <div className='login' >
            <form onSubmit={handleSubmit} className='form d-flex flex-column justify-content-center  bg-white ' >
                <h1 className='text-center' >Login </h1>

                {error && <div className='mt-5 p-2 h6 text-danger border border-danger'>{error.error}</div>}

                <div className="form-group mt-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <Link className='forgot text-muted ' to='/forgot'>Forgot password ?</Link>
                <button className="btn btn-danger mt-4 ">Login</button>
                <div className="mt-4" >Don't have a account than <Link to='/register'>Sign Up</Link> </div>
            </form>
          
        </div>
    )
}

export default LoginScreen