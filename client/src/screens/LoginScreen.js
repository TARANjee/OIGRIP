import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUserAction } from '../actions/userAction'
import { useDispatch } from 'react-redux'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

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
            <form onSubmit={handleSubmit} className='w-90 d-flex flex-column justify-content-center' >
                <h1 className='text-center' >Login </h1>
                <div className="form-group mt-5">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>

                <button className="btn btn-danger mt-4 ">Login</button>
                <div className="mt-4" >Don't have a account than <Link to='/register'>Sign Up</Link> </div>
            </form>
        </div>
    )
}

export default LoginScreen