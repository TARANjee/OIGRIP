import React, { useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { ActivationAction } from '../actions/userAction';
import { useDispatch, useSelector } from 'react-redux'

const Activation = () => {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.userReducer)

  
    const searchQuery = useSearchParams()[0]
    const activation_token = searchQuery.get("reference")
    useEffect(() => {
        dispatch(ActivationAction(activation_token))

    }, [dispatch])
    

    return (
        <div style={{ height: '90vh' }} className=' d-flex justify-content-center align-items-center' >
            <div>
                <h1>Activation Successful</h1>
               

                <Link className='btn btn-danger d-flex justify-content-center' to='/login' >Sign in</Link>
            </div>
        </div>
    )
}

export default Activation