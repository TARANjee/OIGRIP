import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CustomersScreen from '../screens/Admin/CustomersScreen';
import OrdersAScreen from '../screens/Admin/OrdersAScreen';
import Homescreen from '../screens/Admin/Home';
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {
    const User = useSelector(state => state.userReducer)
    const navigate = useNavigate();
    const { currentUser } = User
    return (
        <div className=''>
            <div className='h1 d-flex justify-content-center bg-dark text-white p-3 '>Admin Panel</div>
            <div className="row">
                <div className="col-sm-3 ">
                    <div className='d-flex flex-column btn-group' role="group">
                        <button onClick={() => navigate('/admin/home')} className='btn bg-dark text-white p-2' to=''>Home</button>
                        <button onClick={() => navigate('/admin/orders')} className=' btn bg-dark text-white p-2' to='/admin/orders'>Orders</button>
                        <button onClick={() => navigate('/admin/customers')} className='btn bg-dark text-white p-2' to='/admin/customers'>Customers</button>
                    </div>
                </div>
                <div className="col-sm-9">
                <Homescreen />
                </div>

            </div>
        </div>
    )
}

export default AdminDashboard