import React from 'react'
import { Link, useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {

    const searchQuery= useSearchParams()[0]
   const reference_num=searchQuery.get("reference")
  return (
    <div style={{height:'90vh'}}  className=' d-flex justify-content-center align-items-center' >
        <div>
            <h1>Order Successful</h1>
            <p>Reference No. {reference_num}</p>

            <Link className='btn btn-danger d-flex justify-content-center' to='/orders' >Orders</Link>
        </div>
    </div>
  )
}

export default PaymentSuccess