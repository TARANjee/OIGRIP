import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPasswordAction } from '../actions/userAction'
import {  useSearchParams } from "react-router-dom";

const ForgotPassword = () => {
  const searchQuery = useSearchParams()[0]
  const a_token = searchQuery.get("token")
  const [password, setPassword] = useState('')
  const [cpassword, setcPassword] = useState('')

  const dispatch = useDispatch()
  const userState = useSelector(state => state.userReducer)

  const { msg } = userState

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== cpassword) {
      alert("password not Matched")
    } else {
      dispatch(forgotPasswordAction({ password, a_token }))
    }
  }

  return (
    <div className='login' >
      <form className='form d-flex flex-column justify-content-center  bg-white ' onSubmit={handleSubmit} >
        <h2 className='text-center' >Forgot Password </h2>

        {msg && <div className='mt-3 p-2 h6 text-danger text-center border border-danger'>{msg.msg}</div>}

        <div className="form-group mt-4">
          <label >Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
        </div>
        <div className="form-group mt-4">
          <label >Confirm Password:</label>
          <input type="password" className="form-control" value={cpassword} onChange={(e) => setcPassword(e.target.value)} placeholder="Enter Confirm Password" />
        </div>
        <button className="btn btn-danger mt-2 ">Login</button>

      </form>
    </div>
  )
}

export default ForgotPassword