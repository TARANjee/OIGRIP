import React, { useState } from 'react'
import { sendForgotEmailAction } from '../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'


const Forgot = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer)

    const { msg } = userState
    console.log(msg)
    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch(sendForgotEmailAction({ email }))

    }


    return (
        <div className='login' >
            <form className='form d-flex flex-column justify-content-center  bg-white ' onSubmit={handleSubmit} >
            <h2 className='text-center' >Forgot Password </h2>

                {msg && <div className='mt-3 p-2 h6 text-danger text-center border border-danger'>{msg.msg}</div>}

                <div className="form-group mt-4">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
                <button className="btn btn-danger mt-2 ">Login</button>

            </form>
        </div>
    )
}

export default Forgot