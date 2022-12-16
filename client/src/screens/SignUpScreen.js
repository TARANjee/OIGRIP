import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUserAction } from '../actions/userAction'

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCpassword] = useState('')
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer)

    const { error ,loading} = userState
    console.log(error)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== cPassword) {
            alert("password not Matched")
        }
        else {
            const user = {
                name,
                email,
                password
            }
            dispatch(registerUserAction(user))
        }
    }

    return (

        <div className='login' >
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='text-center' >Sign Up </h1>
                {error && <div className='mt-5 p-2 h6 text-danger border border-danger'>{error.error}</div>}

                <div className="form-group mt-4">
                    <label for="exampleInputEmail1 ">Full Name:</label>
                    <input  type="text" className="form-control h4" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input  type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password:</label>
                    <input  type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm Password:</label>
                    <input  type="password" className="form-control" value={cPassword} onChange={(e) => setCpassword(e.target.value)} placeholder="Password" />
                </div>
                <button disabled={loading} className="btn btn-danger mt-4 btn-block ">Sign Up</button>
                
                <div className="mt-4" >If You have a account than <Link to='/login'>Login</Link> </div>
            </form>
        </div>
    )
}

export default SignUpScreen